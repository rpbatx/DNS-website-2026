/* === MAIN.JS — Dietary Network Services === */
/* PAGE: main.js | LAST UPDATED: 2026-02-25 | EDITOR: AI */

/* ============================================================
   1. HAMBURGER NAVIGATION TOGGLE
   Toggles mobile nav menu open/closed.
   ============================================================ */

(function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.getElementById('nav-menu');

  if (!toggle || !menu) return;

  function setMenuOpen(isOpen) {
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      menu.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  toggle.addEventListener('click', function () {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  /* Close menu when a nav link is clicked */
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      setMenuOpen(false);
    }
  });

  /* Close menu when clicking outside */
  document.addEventListener('click', function (e) {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (!isOpen) return;
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      setMenuOpen(false);
    }
  });

  /* Close on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  /* Close if viewport resizes to desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
    }
  });
})();

/* ============================================================
   2. SERVICES DROPDOWN KEYBOARD SUPPORT
   On desktop: CSS :hover already opens the dropdown.
   This adds keyboard (Enter/Space/Escape) and click-outside
   support for the .nav-has-dropdown item.
   ============================================================ */

(function initDropdown() {
  const dropdownParent = document.querySelector('.nav-has-dropdown');
  if (!dropdownParent) return;

  const trigger  = dropdownParent.querySelector('.nav-dropdown-toggle');
  const dropdown = dropdownParent.querySelector('.nav-dropdown');
  if (!trigger || !dropdown) return;

  function openDropdown() {
    dropdownParent.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    dropdownParent.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
  }

  function isOpen() {
    return dropdownParent.classList.contains('is-open');
  }

  /* Toggle on click (keyboard or touch) */
  trigger.addEventListener('click', function (e) {
    /* On desktop with hover CSS active, click still works fine */
    if (window.innerWidth < 768) return; /* mobile: dropdown is always visible */
    isOpen() ? closeDropdown() : openDropdown();
  });

  /* Keyboard: Enter / Space open; Escape closes */
  trigger.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      isOpen() ? closeDropdown() : openDropdown();
    }
    if (e.key === 'Escape') {
      closeDropdown();
      trigger.focus();
    }
  });

  /* Close if focus moves outside the dropdown */
  document.addEventListener('focusin', function (e) {
    if (!dropdownParent.contains(e.target)) {
      closeDropdown();
    }
  });

  /* Close if click outside */
  document.addEventListener('click', function (e) {
    if (!dropdownParent.contains(e.target)) {
      closeDropdown();
    }
  });

  /* Escape anywhere closes the dropdown */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      closeDropdown();
      trigger.focus();
    }
  });
})();

/* ============================================================
   3. SCROLL FADE-IN ANIMATIONS
   ============================================================ */

(function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const animatedSelectors = [
    '.service-card',
    '.value-card',
    '.service-area',
    '.stat-item',
    '.credential-item',
    '.contact-detail',
    '.form-card'
  ].join(', ');

  const targets = document.querySelectorAll(animatedSelectors);
  if (!targets.length) return;

  targets.forEach(function (el) {
    el.classList.add('fade-in');
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.10,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();

/* ============================================================
   4. ACTIVE NAV LINK HIGHLIGHT
   ============================================================ */

(function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks    = document.querySelectorAll('#nav-menu a');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
