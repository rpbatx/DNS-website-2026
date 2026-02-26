/* === ANALYTICS.JS — Dietary Network Services === */
/* PAGE: analytics.js | LAST UPDATED: 2026-02-25 | EDITOR: AI */

/* ============================================================
   ANALYTICS LOADER
   Only loads Google Analytics AFTER the user has accepted
   analytics cookies. Listens for the 'consentUpdate' event
   dispatched by cookies.js.

   PHASE 5: Replace 'GA_MEASUREMENT_ID' with actual GA4 ID.
   ============================================================ */

(function initAnalytics() {

  var GA_ID = 'GA_MEASUREMENT_ID'; /* Replace with real GA4 Measurement ID in Phase 5 */
  var loaded = false;

  /* Load GA4 script dynamically */
  function loadGA() {
    if (loaded) return;
    loaded = true;

    /* gtag script tag */
    var script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    script.async = true;
    document.head.appendChild(script);

    /* gtag init */
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  }

  /* Listen for consent decision from cookies.js */
  document.addEventListener('consentUpdate', function (e) {
    if (e.detail && e.detail.analytics === true) {
      loadGA();
    }
  });

})();
