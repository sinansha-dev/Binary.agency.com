const { createReadStream, existsSync, statSync } = require('node:fs');
const { createServer } = require('node:http');
const { extname, join, normalize, resolve, sep } = require('node:path');

const port = Number(process.env.PORT || process.argv[2] || 4173);
const root = resolve(__dirname, '..');

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

function resolveRequestPath(requestUrl) {
  const parsedUrl = new URL(requestUrl, `http://localhost:${port}`);
  const decodedPath = decodeURIComponent(parsedUrl.pathname);
  const safePath = normalize(decodedPath).replace(/^([/\\])+/, '');
  const filePath = resolve(root, safePath);

  if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
    return null;
  }

  if (!existsSync(filePath)) {
    return join(root, 'index.html');
  }

  if (statSync(filePath).isDirectory()) {
    return join(filePath, 'index.html');
  }

  return filePath;
}

const server = createServer((request, response) => {
  const filePath = resolveRequestPath(request.url || '/');

  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  const contentType = mimeTypes[extname(filePath)] || 'application/octet-stream';
  response.writeHead(200, { 'Content-Type': contentType });

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
});

server.listen(port, () => {
  console.log(`Binary Agency site running at http://localhost:${port}`);
});
