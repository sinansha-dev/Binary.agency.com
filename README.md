# Binary Agency Website

A scalable, reusable vanilla JavaScript landing page implementation for Binary Agency.

## Structure

- `src/main.js` contains page data arrays and reusable render functions for each section.
- `src/styles.css` defines the design tokens, layout primitives, reusable cards, and responsive behavior.
- `index.html` provides app metadata and loads the site entry point.
- `scripts/serve.js` provides a small Node.js static server for local development and preview.

## Commands

```bash
npm run dev
npm run build
```

## Run locally

1. Install Node.js if it is not already installed.
2. Start the local server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:4173` in your browser.
4. Stop the server with `Ctrl + C`.

No Python server or external npm packages are required.
