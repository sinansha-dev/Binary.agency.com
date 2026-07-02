const stats = [
  { value: 'Sub-1.0s', label: 'Average PageSpeed load times for systems we deploy.' },
  { value: '100%', label: 'Hand-written custom code built to optimize conversions.' },
  { value: 'Global Edge', label: 'High-availability cloud infrastructure & edge hosting.' },
];

const services = [
  {
    eyebrow: '01 / Web Dev',
    title: 'Bespoke Web Engineering',
    copy: 'Fast front-ends built with zero bloat. We write clean, semantic code that scores 100% on PageSpeed, ranks natively on search engines, and works perfectly on every device.',
    features: ['Next-gen responsiveness', 'SEO-first structure', 'Performance tuning'],
  },
  {
    eyebrow: '02 / Design',
    title: 'Elite Interface Design',
    copy: 'High-fidelity layouts designed to delight and convert. We map deep user journeys, build interactive wireframes, and design signature visual identities that make your product unforgettable.',
    features: ['Interactive prototyping', 'Brand design systems', 'Figma asset delivery'],
  },
  {
    eyebrow: '03 / E-commerce',
    title: 'Custom Commerce Engines',
    copy: 'Bespoke checkouts and shopping carts engineered for maximum conversion rates. We integrate secure multi-currency payments and build automated back-offices tailored to your operations.',
    features: ['Frictionless checkouts', 'Multi-currency setups', 'Inventory auto-sync'],
  },
  {
    eyebrow: '04 / Software',
    title: 'Enterprise Applications',
    copy: 'Robust, secure, and scalable web applications designed to automate operations. We engineer secure APIs, modern dashboards, and custom databases to supercharge your team\'s workflow.',
    features: ['Automated workflows', 'Relational DB design', 'Third-party API bridges'],
  },
];

const work = [
  {
    name: 'May Exports Thailand',
    category: 'Global B2B Commerce',
    metric: 'Catalog Database',
    description: 'An international B2B directory and agricultural export search platform, optimizing bulk quote requests and catalog index speeds in Bangkok.',
    link: 'https://www.mayexportsthailand.com/',
  },
  {
    name: 'Romford Group',
    category: 'Luxury Real Estate',
    metric: 'Investor Platform',
    description: 'A high-end, immersive digital showcase showcasing multi-million dollar luxury real estate investments and developer portfolios.',
    link: 'https://romford.netlify.app',
  },
  {
    name: 'ESF UAE',
    category: 'Enterprise Distribution',
    metric: 'Booking & Catalog',
    description: 'A high-speed product portal and complex booking system built for one of the largest sports equipment distributors in the UAE.',
    link: 'https://www.esfuae.com/',
  },
  {
    name: 'AtoZ Travel',
    category: 'B2C Hospitality',
    metric: 'Interactive Planner',
    description: 'A custom, high-speed itinerary planner and holiday package booking tool tailored for premium GCC travel and tourism.',
    link: 'https://atoztravel.ae',
  },
];

const process = [
  {
    label: '01 / Strategy',
    title: 'Technical Architecture & Alignment',
    copy: 'We break down your goals, wireframe the user flow, and design the software architecture before writing a single line of code.',
  },
  {
    label: '02 / Interface',
    title: 'Interactive High-Fidelity Design',
    copy: 'We build interactive prototypes in Figma, shaping the design system, micro-interactions, and visual layouts until it feels signature.',
  },
  {
    label: '03 / Engineering',
    title: 'Production Engineering & Optimization',
    copy: 'We write production-grade, highly-optimized code, rigorously test across devices and platforms, and deploy on global edge servers.',
  },
];

const html = String.raw;

function sectionHeader({ eyebrow, title, copy = '' }) {
  return html`
    <div class="section-header">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
      ${copy ? `<p>${copy}</p>` : ''}
    </div>
  `;
}

function header() {
  return html`
    <header class="site-header" aria-label="Primary navigation">
      <a class="brand" href="#top" aria-label="Binary.Agency home">
        Binary<span class="brand-dot">.</span>Agency
      </a>
      <nav class="nav-links" aria-label="Main menu">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
      </nav>
      <a class="button button--small" href="#contact">Start a project</a>
    </header>
  `;
}

function hero() {
  return html`
    <section class="hero" id="top">
      <div class="hero__content">
        <p class="eyebrow">Digital Product & Growth Studio</p>
        <h1>We engineer high-performance web products and elite digital interfaces.</h1>
        <p class="hero__copy">
          Binary.Agency is a boutique design and software engineering studio. We combine world-class code with sharp UX strategy to build lightning-fast web applications, custom e-commerce engines, and high-converting marketing systems. No templates, no page builders—just pure performance.
        </p>
        <div class="hero__actions">
          <a class="button" href="#contact">Start a conversation</a>
          <a class="button button--ghost" href="#work">View selected work</a>
        </div>
      </div>
    </section>
  `;
}

function techStack() {
  const techs = ['Vanilla JS', 'HTML5 & CSS3', 'Vite', 'React', 'Node.js', 'WebGL', 'Bespoke APIs', 'Performance Tuning'];
  return html`
    <section class="tech-stack" aria-label="Technologies we code with">
      <p class="eyebrow">Our Stack</p>
      <div class="tech-grid">
        ${techs.map(tech => html`
          <div class="tech-badge">
            <span class="tech-dot"></span>
            ${tech}
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function statsBand() {
  return html`
    <section class="stats-band" aria-label="Agency results">
      ${stats.map((stat) => html`
        <article>
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </article>
      `).join('')}
    </section>
  `;
}

function servicesSection() {
  return html`
    <section class="section" id="services">
      ${sectionHeader({
        eyebrow: 'Our Capabilities',
        title: 'Engineered to win. Designed to convert.',
        copy: 'We don\'t build generic websites. We engineer high-performance digital assets that capture market share, load instantly, and elevate your brand\'s presence.',
      })}
      <div class="card-grid card-grid--services">
        ${services.map((service) => html`
          <article class="service-card">
            <p class="eyebrow">${service.eyebrow}</p>
            <h3>${service.title}</h3>
            <p>${service.copy}</p>
            <ul>
              ${service.features.map((feature) => `<li>${feature}</li>`).join('')}
            </ul>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function workSection() {
  return html`
    <section class="section section--dark" id="work">
      ${sectionHeader({ eyebrow: 'Case Studies', title: 'Production systems we\'ve shipped.' })}
      <div class="card-grid card-grid--work">
        ${work.map((item) => html`
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="work-card">
            <div>
              <p class="eyebrow">${item.category}</p>
              <h3>${item.name}</h3>
            </div>
            <p>${item.description}</p>
            <div class="work-card__bottom">
              <strong>${item.metric}</strong>
              <span class="visit-link">Visit Site ↗</span>
            </div>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}

function processSection() {
  return html`
    <section class="section" id="process">
      ${sectionHeader({ eyebrow: 'Our Process', title: 'Our execution framework.' })}
      <div class="timeline">
        ${process.map((step, index) => html`
          <article class="timeline__item">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <div>
              <p class="eyebrow">${step.label}</p>
              <h3>${step.title}</h3>
              <p>${step.copy}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function contact() {
  return html`
    <section class="contact" id="contact">
      <div>
        <p class="eyebrow">Start a Project</p>
        <h2>Let's engineer your growth.</h2>
      </div>
      <a class="button button--light" href="mailto:hello@binary.agency">Start a conversation</a>
    </section>
  `;
}

function footer() {
  return html`
    <footer class="site-footer">
      <span>© 2026 Binary<span class="brand-dot">.</span>Agency</span>
      <span>Design · Engineering · Growth</span>
    </footer>
  `;
}

function app() {
  return html`
    ${header()}
    <main>
      ${hero()}
      ${techStack()}
      ${statsBand()}
      ${servicesSection()}
      ${workSection()}
      ${processSection()}
      ${contact()}
    </main>
    ${footer()}
  `;
}

document.getElementById('root').innerHTML = app();



// --- Debounce Helper ---
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// --- Background Binary Grid Initializer ---
function initBackgroundGrid() {
  const container = document.getElementById('bg-binary-grid');
  if (!container) return;

  // Each cell is 70px including gap (approx 54px cell + 16px gap)
  const cellWidth = 70;
  const cols = Math.ceil(window.innerWidth / cellWidth);
  const rows = Math.ceil(window.innerHeight / cellWidth);

  container.style.setProperty('--grid-cols', cols);
  container.style.setProperty('--grid-rows', rows);

  const cellCount = cols * rows;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < cellCount; i++) {
    const span = document.createElement('span');
    span.textContent = Math.random() > 0.5 ? '1' : '0';
    // Random initial opacity between 0.1 and 0.5 for an organic look
    span.style.opacity = (Math.random() * 0.4 + 0.1).toFixed(2);
    fragment.appendChild(span);
  }

  container.innerHTML = '';
  container.appendChild(fragment);
}

// Initialize on page load
initBackgroundGrid();

// Handle window resize with debounce to maintain grid layout
window.addEventListener('resize', debounce(initBackgroundGrid, 200));

// --- Periodic Background Grid Updates ---
setInterval(() => {
  const cells = document.querySelectorAll('#bg-binary-grid span');
  if (cells.length > 0) {
    // Select about 1.5% of cells to toggle value and opacity
    const toggleCount = Math.max(3, Math.floor(cells.length * 0.015));
    for (let i = 0; i < toggleCount; i++) {
      const index = Math.floor(Math.random() * cells.length);
      const cell = cells[index];
      if (cell) {
        cell.textContent = cell.textContent === '1' ? '0' : '1';
        cell.style.opacity = (Math.random() * 0.4 + 0.1).toFixed(2);
        
        // Add a temporary subtle flash highlight
        cell.style.borderColor = 'rgba(25, 219, 125, 0.15)';
        cell.style.backgroundColor = 'rgba(25, 219, 125, 0.03)';
        setTimeout(() => {
          cell.style.borderColor = '';
          cell.style.backgroundColor = '';
        }, 1200);
      }
    }
  }
}, 800);

// --- Mouse Coordinate Tracking for Cursor Spotlight ---
document.addEventListener('mousemove', (e) => {
  const bgWrapper = document.querySelector('.page-bg-animation');
  if (bgWrapper) {
    bgWrapper.style.setProperty('--mouse-x', `${e.clientX}px`);
    bgWrapper.style.setProperty('--mouse-y', `${e.clientY}px`);
  }
});
