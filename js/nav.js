// Alice HomeTech — Navigation & Language Switcher

(function () {
  // Hamburger menu
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks = document.querySelector('.nav__links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Language switcher dropdown
  const langSwitcher = document.querySelector('.lang-switcher');
  if (langSwitcher) {
    const btn = langSwitcher.querySelector('.lang-switcher__btn');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      langSwitcher.classList.toggle('open');
    });
    document.addEventListener('click', () => {
      langSwitcher.classList.remove('open');
    });
  }

  // Highlight active nav link based on current page
  const path = window.location.pathname;
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (path.endsWith(href) || (path === '/' && href.includes('index'))) {
      a.classList.add('active');
    }
  });

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
