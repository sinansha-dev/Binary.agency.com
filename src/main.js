const stats = [
  { value: '42+', label: 'launches shipped' },
  { value: '3.8x', label: 'avg. conversion lift' },
  { value: '12wk', label: 'from strategy to scale' },
];

const services = [
  {
    eyebrow: '01 / Strategy',
    title: 'Positioning that turns complexity into a clear growth story.',
    copy: 'We align brand, audience, and revenue goals before a single screen is designed.',
    features: ['Market narrative', 'Offer architecture', 'Launch roadmaps'],
  },
  {
    eyebrow: '02 / Experience',
    title: 'Reusable design systems for websites and digital products.',
    copy: 'Every component is built to scale across pages, campaigns, and future product flows.',
    features: ['UX journeys', 'UI systems', 'Prototype validation'],
  },
  {
    eyebrow: '03 / Engineering',
    title: 'Fast, maintainable builds that marketing teams can actually use.',
    copy: 'We ship accessible front ends with repeatable sections, clean content patterns, and performance in mind.',
    features: ['Responsive builds', 'CMS-ready structure', 'Performance tuning'],
  },
];

const work = [
  {
    name: 'Orbit Finance',
    category: 'Fintech platform',
    metric: '+64% activation',
    description: 'A conversion-focused product story and modular landing experience for an analytics SaaS team.',
  },
  {
    name: 'Northstar Labs',
    category: 'AI operations',
    metric: '2.1x demo rate',
    description: 'A refreshed brand system with reusable campaign pages for enterprise demand generation.',
  },
  {
    name: 'LedgerFlow',
    category: 'B2B workflow',
    metric: '-38% CAC',
    description: 'A scalable website framework that gave sales and marketing teams a consistent launch engine.',
  },
];

const process = [
  {
    label: 'Discover',
    title: 'Map the opportunity',
    copy: 'We audit your market, message, and product experience to define what must be true for growth.',
  },
  {
    label: 'Design',
    title: 'Systemize the experience',
    copy: 'We translate the strategy into flexible sections, interface patterns, and content rules.',
  },
  {
    label: 'Deliver',
    title: 'Launch and learn',
    copy: 'We build, test, measure, and give your team a scalable foundation for the next iteration.',
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
      <a class="brand" href="#top" aria-label="Binary Agency home">
        <span class="brand-mark">B</span>
        <span>Binary Agency</span>
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
  const gridCells = Array.from({ length: 28 }, () => '<span></span>').join('');

  return html`
    <section class="hero" id="top">
      <div class="hero__content">
        <p class="eyebrow">Digital product & growth studio</p>
        <h1>We design scalable websites for ambitious binary thinkers.</h1>
        <p class="hero__copy">
          Binary Agency combines strategy, UX/UI design, and front-end engineering to turn complex offers into beautiful reusable web systems.
        </p>
        <div class="hero__actions">
          <a class="button" href="#contact">Book a discovery call</a>
          <a class="button button--ghost" href="#work">View selected work</a>
        </div>
      </div>
      <div class="hero-card" aria-label="Project dashboard preview">
        <div class="hero-card__topline">
          <span>Launch system</span>
          <span class="status-pill">Live</span>
        </div>
        <div class="signal-grid" aria-hidden="true">${gridCells}</div>
        <div class="metric-card">
          <strong>96%</strong>
          <span>Reusable component coverage</span>
        </div>
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
        title: 'One scalable method from first idea to launch.',
        copy: 'A reusable component approach keeps every page consistent, fast to extend, and aligned to your brand.',
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
      ${sectionHeader({ eyebrow: 'Selected work', title: 'Launch-ready systems built to compound.' })}
      <div class="card-grid">
        ${work.map((item) => html`
          <article class="work-card">
            <div>
              <p class="eyebrow">${item.category}</p>
              <h3>${item.name}</h3>
            </div>
            <p>${item.description}</p>
            <strong>${item.metric}</strong>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function processSection() {
  return html`
    <section class="section" id="process">
      ${sectionHeader({ eyebrow: 'Our method', title: 'Reusable by design, measurable by default.' })}
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
        <p class="eyebrow">Ready to build?</p>
        <h2>Bring your Figma vision to a scalable website system.</h2>
      </div>
      <a class="button button--light" href="mailto:hello@binary.agency">hello@binary.agency</a>
    </section>
  `;
}

function footer() {
  return html`
    <footer class="site-footer">
      <span>© 2026 Binary Agency</span>
      <span>Strategy · UX/UI · Engineering</span>
    </footer>
  `;
}

function app() {
  return html`
    ${header()}
    <main>
      ${hero()}
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
