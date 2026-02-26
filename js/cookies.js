/* === COOKIES.JS — Dietary Network Services === */
/* PAGE: cookies.js | LAST UPDATED: 2026-02-25 | EDITOR: AI */

/* ============================================================
   COOKIE CONSENT BANNER
   - Checks localStorage for saved preference
   - If no preference, shows banner after short delay
   - Accept All: enables analytics cookies
   - Reject Non-Essential: necessary cookies only
   - Preference stored in localStorage for 365 days
   - Dispatches 'consentUpdate' event for analytics.js to listen
   ============================================================ */

(function initCookieConsent() {

  var STORAGE_KEY = 'dns_cookie_consent';
  var EXPIRY_DAYS = 365;

  /* Save consent to localStorage with a timestamp */
  function saveConsent(analytics) {
    var record = {
      necessary: true,
      analytics: analytics,
      timestamp: Date.now(),
      expiry: Date.now() + (EXPIRY_DAYS * 24 * 60 * 60 * 1000)
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch (e) {
      /* localStorage unavailable — fail silently */
    }
  }

  /* Read saved consent from localStorage, returns null if expired or missing */
  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var record = JSON.parse(raw);
      if (!record || !record.expiry) return null;
      if (Date.now() > record.expiry) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return record;
    } catch (e) {
      return null;
    }
  }

  /* Fire a custom event so analytics.js can respond */
  function dispatchConsentUpdate(analytics) {
    var event = new CustomEvent('consentUpdate', {
      detail: { analytics: analytics }
    });
    document.dispatchEvent(event);
  }

  /* Hide the banner */
  function hideBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.setAttribute('hidden', '');
    }
  }

  /* Show the banner */
  function showBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.removeAttribute('hidden');
      var firstBtn = banner.querySelector('button');
      if (firstBtn) firstBtn.focus();
    }
  }

  /* Accept all cookies */
  function acceptAll() {
    saveConsent(true);
    hideBanner();
    dispatchConsentUpdate(true);
  }

  /* Reject non-essential cookies */
  function rejectNonEssential() {
    saveConsent(false);
    hideBanner();
    dispatchConsentUpdate(false);
  }

  /* Bind button events */
  function bindButtons() {
    var acceptBtn = document.getElementById('cookie-accept');
    var rejectBtn = document.getElementById('cookie-reject');
    if (acceptBtn) acceptBtn.addEventListener('click', acceptAll);
    if (rejectBtn) rejectBtn.addEventListener('click', rejectNonEssential);
  }

  /* Init: check existing preference or show banner */
  function init() {
    var consent = getConsent();
    if (consent) {
      /* Already decided — signal analytics.js */
      dispatchConsentUpdate(consent.analytics);
      return;
    }
    /* No preference yet — show banner after short delay */
    setTimeout(function () {
      showBanner();
      bindButtons();
    }, 800);
  }

  /* Public API: re-open preferences (used by footer "Cookie Settings" link) */
  window.DNS = window.DNS || {};
  window.DNS.openCookiePreferences = function () {
    showBanner();
    bindButtons();
  };

  /* Public API: check whether analytics is allowed */
  window.DNS.analyticsAllowed = function () {
    var consent = getConsent();
    return consent ? consent.analytics : false;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
