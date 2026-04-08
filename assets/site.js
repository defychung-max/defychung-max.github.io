(function () {
  const root = document.getElementById("app");
  const page = document.body.dataset.page;
  const lang = document.body.dataset.lang;
  const content = window.SITE_CONTENT;

  if (!root || !page || !lang || !content || !content.pages[page]) {
    return;
  }

  const pageData = content.pages[page][lang];

  root.innerHTML = [
    renderHeader(content, page, lang),
    `<main class="site-main">${renderPage(page, pageData)}</main>`,
    renderFooter(content, lang)
  ].join("");

  enhancePage();
})();

function renderHeader(content, currentPage, lang) {
  const navLinks = Object.keys(content.nav)
    .map((key) => {
      const href = content.pageMap[key][lang];
      const isActive = key === currentPage;
      return `
        <a class="nav-link${isActive ? " is-active" : ""}" href="${href}" ${isActive ? 'aria-current="page"' : ""}>
          ${content.nav[key][lang]}
        </a>
      `;
    })
    .join("");

  const langLinks = Object.keys(content.pageMap[currentPage])
    .map((key) => {
      const isActive = key === lang;
      return `
        <a class="lang-link${isActive ? " is-active" : ""}" href="${content.pageMap[currentPage][key]}" ${isActive ? 'aria-current="page"' : ""}>
          ${key.toUpperCase()}
        </a>
      `;
    })
    .join("");

  return `
    <header class="site-header" id="top">
      <div class="container topbar">
        <a class="brand" href="${content.pageMap.home[lang]}">
          <span class="brand-mark">${content.profile.initials}</span>
          <span class="brand-copy">
            <strong>${content.profile.name}</strong>
            <span>${content.profile.role[lang]}</span>
          </span>
        </a>
        <nav class="main-nav" aria-label="Primary">
          ${navLinks}
        </nav>
        <div class="lang-switch" aria-label="Language switch">
          ${langLinks}
        </div>
      </div>
    </header>
  `;
}

function renderFooter(content, lang) {
  return `
    <footer class="site-footer">
      <div class="container footer-row">
        <div class="footer-copy">
          <p class="footer-name">${content.profile.name}</p>
          <p class="footer-note">${content.profile.footer[lang]}</p>
        </div>
        <div class="footer-links">
          <a href="${content.pageMap.home[lang]}">Top</a>
          <a href="${content.profile.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="${content.profile.repo}" target="_blank" rel="noreferrer">Source</a>
        </div>
      </div>
    </footer>
  `;
}

function renderPage(page, data) {
  switch (page) {
    case "home":
      return [
        renderHero(data.hero, data.quickFacts),
        renderCardSection(data.focus, "triple-grid"),
        renderCardSection(data.areas, "triple-grid"),
        renderLinkedCardSection(data.featured, "triple-grid", "featured-projects"),
        renderUpdateSection(data.updates),
        renderCtaBand(data.cta)
      ].join("");
    case "projects":
      return [
        renderHero(data.hero),
        renderCardSection(data.featured, "quad-grid", "featured-projects"),
        renderCardSection(data.experiments, "triple-grid"),
        renderTimelineSection(data.workflow),
        renderTagSection(data.stack),
        renderCtaBand(data.cta)
      ].join("");
    case "writing":
      return [
        renderHero(data.hero),
        renderCardSection(data.featured, "quad-grid", "featured-writing"),
        renderCardSection(data.archive, "triple-grid"),
        renderCardSection(data.principles, "triple-grid"),
        renderCtaBand(data.cta)
      ].join("");
    case "contact":
      return [
        renderHero(data.hero),
        renderCardSection(data.tracks, "quad-grid", "collaboration-tracks"),
        renderTimelineSection(data.process),
        renderLinkedCardSection(data.channels, "dual-grid"),
        renderTemplateSection(data.template),
        renderFaqSection(data.faq),
        renderCtaBand(data.cta)
      ].join("");
    default:
      return "";
  }
}

function renderHero(hero, quickFacts) {
  return `
    <section class="hero section-shell" data-reveal>
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${hero.eyebrow}</p>
          <h1 class="page-title">${hero.title}</h1>
          <p class="hero-summary">${hero.summary}</p>
          ${hero.pills ? `<div class="hero-pills">${hero.pills.map((pill) => `<span class="pill">${pill}</span>`).join("")}</div>` : ""}
          ${hero.actions ? `<div class="action-row">${hero.actions.map(renderAction).join("")}</div>` : ""}
        </div>
        ${
          quickFacts
            ? `<aside class="hero-panel">
                ${quickFacts
                  .map(
                    (fact) => `
                      <div class="meta-item">
                        <span class="meta-label">${fact.label}</span>
                        <strong class="meta-value">${fact.value}</strong>
                      </div>
                    `
                  )
                  .join("")}
              </aside>`
            : ""
        }
      </div>
    </section>
  `;
}

function renderCardSection(section, gridClass, id) {
  return `
    <section class="section-shell" ${id ? `id="${id}"` : ""} data-reveal>
      <div class="container">
        ${renderSectionHead(section)}
        <div class="card-grid ${gridClass}">
          ${section.items.map(renderCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderLinkedCardSection(section, gridClass, id) {
  return `
    <section class="section-shell" ${id ? `id="${id}"` : ""} data-reveal>
      <div class="container">
        ${renderSectionHead(section)}
        <div class="card-grid ${gridClass}">
          ${section.items
            .map(
              (item) => `
                <article class="card">
                  <p class="card-kicker">${item.kicker}</p>
                  <h3 class="card-title">${item.title}</h3>
                  <p class="card-copy">${item.copy}</p>
                  ${
                    item.tags
                      ? `<div class="card-tags">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>`
                      : ""
                  }
                  ${
                    item.href
                      ? `<a class="text-link" href="${item.href}" ${isExternal(item.href) ? 'target="_blank" rel="noreferrer"' : ""}>${item.linkLabel}</a>`
                      : ""
                  }
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderUpdateSection(section) {
  return `
    <section class="section-shell" data-reveal>
      <div class="container">
        ${renderSectionHead(section)}
        <div class="card-grid triple-grid">
          ${section.items
            .map(
              (item) => `
                <article class="card update-card">
                  <p class="card-kicker">${item.date}</p>
                  <h3 class="card-title">${item.title}</h3>
                  <p class="card-copy">${item.copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderTimelineSection(section) {
  return `
    <section class="section-shell" data-reveal>
      <div class="container">
        ${renderSectionHead(section)}
        <div class="timeline">
          ${section.steps
            .map(
              (step, index) => `
                <article class="timeline-step">
                  <div class="step-index">${String(index + 1).padStart(2, "0")}</div>
                  <div class="step-copy">
                    <h3 class="card-title">${step.title}</h3>
                    <p class="card-copy">${step.copy}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderTagSection(section) {
  return `
    <section class="section-shell" data-reveal>
      <div class="container">
        ${renderSectionHead(section)}
        <div class="tag-cloud">
          ${section.tags.map((tag) => `<span class="cloud-tag">${tag}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderTemplateSection(section) {
  return `
    <section class="section-shell" data-reveal>
      <div class="container">
        ${renderSectionHead(section)}
        <div class="template-box">
          <ul class="template-list">
            ${section.lines.map((line) => `<li>${line}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>
  `;
}

function renderFaqSection(section) {
  return `
    <section class="section-shell" data-reveal>
      <div class="container">
        ${renderSectionHead(section)}
        <div class="faq-grid">
          ${section.items
            .map(
              (item) => `
                <article class="faq-item">
                  <h3 class="card-title">${item.title}</h3>
                  <p class="card-copy">${item.copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCard(item) {
  return `
    <article class="card">
      <p class="card-kicker">${item.kicker}</p>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-copy">${item.copy}</p>
      ${
        item.tags
          ? `<div class="card-tags">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>`
          : ""
      }
    </article>
  `;
}

function renderSectionHead(section) {
  return `
    <div class="section-head">
      <p class="eyebrow">${section.eyebrow}</p>
      <h2 class="section-title">${section.title}</h2>
      <p class="section-summary">${section.summary}</p>
    </div>
  `;
}

function renderCtaBand(cta) {
  return `
    <section class="section-shell" data-reveal>
      <div class="container">
        <div class="cta-band">
          <div class="cta-copy">
            <h2 class="section-title">${cta.title}</h2>
            <p class="section-summary">${cta.copy}</p>
          </div>
          <div class="action-row">
            ${cta.actions.map(renderAction).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAction(action) {
  return `
    <a class="button${action.secondary ? " is-secondary" : ""}" href="${action.href}" ${isExternal(action.href) ? 'target="_blank" rel="noreferrer"' : ""}>
      ${action.label}
    </a>
  `;
}

function isExternal(href) {
  return /^https?:\/\//.test(href) || /^mailto:/.test(href);
}

function enhancePage() {
  const header = document.querySelector(".site-header");
  const revealItems = document.querySelectorAll("[data-reveal]");

  const onScroll = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}
