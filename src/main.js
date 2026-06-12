const stats = [
  { value: '100%', label: 'Custom Code (No Templates)' },
  { value: '4', label: 'Live Client Sites Launched' },
  { value: '2', label: 'Locations: Dubai & Bangkok' },
];

const services = [
  {
    eyebrow: '01 / Web Dev',
    title: 'Web Development',
    copy: 'We build custom websites that load instantly and look premium. No slow templates or page builders—just clean, modern code.',
    features: ['Responsive layouts', 'Speed optimization', 'SEO & accessibility'],
  },
  {
    eyebrow: '02 / Design',
    title: 'UI/UX Design',
    copy: 'We design functional, clean interfaces. From initial wireframes to interactive layouts, we focus on usability and polished styling.',
    features: ['Interface styling', 'User workflows', 'Figma design'],
  },
  {
    eyebrow: '03 / E-commerce',
    title: 'E-commerce',
    copy: 'Custom online shops built entirely from scratch. We write bespoke shopping carts, payment checkouts, and admin dashboards designed for your specific store flow.',
    features: ['Custom shopping carts', 'Payment gateways', 'Bespoke checkout flows'],
  },
  {
    eyebrow: '04 / Software',
    title: 'Custom Software',
    copy: 'Bespoke web applications built to automate your operations. We design custom internal tools, databases, and APIs.',
    features: ['API integrations', 'Database design', 'Workflow automation'],
  },
];

const work = [
  {
    name: 'May Exports Thailand',
    category: 'B2B Trade',
    metric: 'B2B Directory',
    description: 'Custom product catalog and import/export database built for an agricultural export company in Bangkok.',
    link: 'https://www.mayexportsthailand.com/',
  },
  {
    name: 'Romford Group',
    category: 'Real Estate',
    metric: 'Portfolio Site',
    description: 'Minimalist corporate portfolio showcase showcasing property investments and luxury residential developments.',
    link: 'https://romford.netlify.app',
  },
  {
    name: 'ESF UAE',
    category: 'Sports Distribution',
    metric: 'Product Portal',
    description: 'B2B equipment distribution directory and booking interface for sports facilities across the UAE.',
    link: 'https://www.esfuae.com/',
  },
  {
    name: 'AtoZ Travel',
    category: 'Travel & Hospitality',
    metric: 'Booking App',
    description: 'Interactive custom travel planner and holiday package booking tool tailored for UAE tourism.',
    link: 'https://atoztravel.ae',
  },
];

const process = [
  {
    label: '01 / Scoping',
    title: 'Strategy & Wireframes',
    copy: 'We scope your project requirements, map the user journeys, and outline page structures before designing.',
  },
  {
    label: '02 / UI Design',
    title: 'Figma Layouts',
    copy: 'We design the complete visual interface in Figma, focusing on layout flow, clean typography, and modern aesthetics.',
  },
  {
    label: '03 / Coding',
    title: 'Development & Launch',
    copy: 'We write clean HTML, CSS, and JS. We optimize page performance, test across all device sizes, and launch the live site.',
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
  const gridCells = Array.from({ length: 28 }, () => `<span class="binary-cell">${Math.random() > 0.5 ? '1' : '0'}</span>`).join('');

  return html`
    <section class="hero" id="top">
      <div class="hero__content">
        <p class="eyebrow">Digital Studio</p>
        <h1>We build custom websites, design interfaces, and code software.</h1>
        <p class="hero__copy">
          A design-focused engineering studio shipping fast frontends, bespoke applications, and custom e-commerce engines built from scratch.
        </p>
        <div class="hero__actions">
          <a class="button" href="#contact">Book a discovery call</a>
          <a class="button button--ghost" href="#work">View selected work</a>
        </div>
      </div>
      <div class="hero-card" aria-label="Studio Details">
        <div class="hero-card__topline">
          <span>Studio HQ</span>
          <span class="status-pill">Active</span>
        </div>
        <div class="signal-grid" aria-hidden="true">${gridCells}</div>
        <div class="metric-card">
          <strong>Dubai</strong>
          <span>& Bangkok · Operating Globally</span>
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
        eyebrow: 'What we do',
        title: 'Bespoke design and clean code.',
        copy: 'We design and engineer custom web platforms. Every project is built from the ground up to load fast, rank well, and work perfectly on every screen size.',
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
      ${sectionHeader({ eyebrow: 'Selected Work', title: 'Projects we\'ve shipped.' })}
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
      ${sectionHeader({ eyebrow: 'How we work', title: 'From first call to deployment.' })}
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
        <h2>Let's build something together.</h2>
      </div>
      <a class="button button--light" href="mailto:hello@binary.agency">hello@binary.agency</a>
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

// Live binary grid cell value toggler to represent "Binary" computation
setInterval(() => {
  const cells = document.querySelectorAll('.binary-cell');
  if (cells.length > 0) {
    // Randomly select 3 cells to toggle values
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * cells.length);
      const cell = cells[index];
      cell.textContent = cell.textContent === '1' ? '0' : '1';
    }
  }
}, 600);
