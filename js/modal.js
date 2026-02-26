/* === MODAL.JS — Dietary Network Services ===
   Reusable popup contact form. Opens on any element with
   data-open-modal="contact" attribute.
   Submits to Formspree; replace FORM_ID with your Formspree form ID.
   ============================================================ */

(function initModal() {
  'use strict';

  /* ----- Config ----- */
  var FORMSPREE_ACTION = 'https://formspree.io/f/xbdawwpg';

  /* ----- Inject modal HTML into body ----- */
  var modalHTML = [
    '<div class="modal-overlay" id="contact-modal" role="dialog" aria-modal="true"',
    '     aria-labelledby="modal-title" hidden>',
    '  <div class="modal-box">',
    '    <button class="modal-close" aria-label="Close dialog" id="modal-close-btn">&#10005;</button>',
    '    <h2 class="modal-title" id="modal-title">Get in Touch</h2>',
    '    <p class="modal-subtitle">Send us a message and we will respond within one business day.</p>',
    '',
    '    <form id="modal-contact-form" novalidate aria-label="Contact form">',
    '      <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">',
    '',
    '      <div class="form-group">',
    '        <label for="modal-name">Name <abbr title="required">*</abbr></label>',
    '        <input type="text" id="modal-name" name="name" required autocomplete="name"',
    '               aria-required="true" aria-describedby="modal-name-error">',
    '        <span id="modal-name-error" class="field-error" role="alert" aria-live="polite"></span>',
    '      </div>',
    '',
    '      <div class="form-group">',
    '        <label for="modal-company">Company / Organization</label>',
    '        <input type="text" id="modal-company" name="company" autocomplete="organization">',
    '      </div>',
    '',
    '      <div class="form-group">',
    '        <label for="modal-email">Email Address <abbr title="required">*</abbr></label>',
    '        <input type="email" id="modal-email" name="email" required autocomplete="email"',
    '               aria-required="true" aria-describedby="modal-email-error">',
    '        <span id="modal-email-error" class="field-error" role="alert" aria-live="polite"></span>',
    '      </div>',
    '',
    '      <div class="form-group">',
    '        <label for="modal-phone">Telephone</label>',
    '        <input type="tel" id="modal-phone" name="phone" autocomplete="tel">',
    '      </div>',
    '',
    '      <div class="form-group">',
    '        <label for="modal-subject">Service of Interest</label>',
    '        <select id="modal-subject" name="subject">',
    '          <option value="">Select a topic...</option>',
    '          <option value="legal-services">Legal Case Support</option>',
    '          <option value="consulting">Consulting Services</option>',
    '          <option value="medical-facilities">Medical Facilities</option>',
    '          <option value="long-term-care">Long Term Care Facilities</option>',
    '          <option value="general">General Inquiry</option>',
    '        </select>',
    '      </div>',
    '',
    '      <div class="form-group">',
    '        <label for="modal-message">Message <abbr title="required">*</abbr></label>',
    '        <textarea id="modal-message" name="message" rows="5" required minlength="10"',
    '                  aria-required="true" aria-describedby="modal-message-error"',
    '                  placeholder="Tell us about your needs..."></textarea>',
    '        <span id="modal-message-error" class="field-error" role="alert" aria-live="polite"></span>',
    '      </div>',
    '',
    '      <div class="form-group form-consent">',
    '        <label class="checkbox-label">',
    '          <input type="checkbox" id="modal-consent" name="consent" required',
    '                 aria-required="true" aria-describedby="modal-consent-error">',
    '          <span>I consent to Dietary Network Services processing my data to respond.',
    '            See our <a href="privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a>.</span>',
    '        </label>',
    '        <span id="modal-consent-error" class="field-error" role="alert" aria-live="polite"></span>',
    '      </div>',
    '',
    '      <button type="submit" class="btn btn-primary" id="modal-submit">Send Message</button>',
    '',
    '      <div id="modal-success" class="form-status success" role="alert" aria-live="polite" hidden>',
    '        <p>Thank you! We have received your message and will respond within one business day.</p>',
    '      </div>',
    '      <div id="modal-error" class="form-status error" role="alert" aria-live="polite" hidden>',
    '        <p>Something went wrong. Please try again or call us at',
    '        <a href="tel:+15123352250">512-335-2250</a>.</p>',
    '      </div>',
    '    </form>',
    '  </div>',
    '</div>'
  ].join('\n');

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  var overlay  = document.getElementById('contact-modal');
  var closeBtn = document.getElementById('modal-close-btn');
  var form     = document.getElementById('modal-contact-form');
  var submitBtn = document.getElementById('modal-submit');
  var successMsg = document.getElementById('modal-success');
  var errorMsg   = document.getElementById('modal-error');

  /* ----- Open / Close ----- */
  function openModal() {
    overlay.removeAttribute('hidden');
    requestAnimationFrame(function () {
      overlay.classList.add('is-open');
    });
    document.body.style.overflow = 'hidden';
    /* Focus first input */
    setTimeout(function () {
      var first = overlay.querySelector('input, select, textarea, button:not(.modal-close)');
      if (first) first.focus();
    }, 100);
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    setTimeout(function () {
      overlay.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }, 280);
  }

  /* Public API */
  window.openContactModal = openModal;
  window.closeContactModal = closeModal;

  /* ----- Triggers: any element with data-open-modal="contact" ----- */
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-open-modal="contact"]');
    if (trigger) {
      e.preventDefault();
      openModal();
    }
  });

  /* Close on backdrop click */
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  /* Close button */
  closeBtn.addEventListener('click', closeModal);

  /* Close on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeModal();
    }
  });

  /* ----- Validation ----- */
  function validateField(input) {
    var errorEl = document.getElementById(input.id + '-error');
    if (!errorEl) return true;
    var valid = input.checkValidity();
    errorEl.textContent = valid ? '' : (input.validationMessage || 'This field is required.');
    return valid;
  }

  /* Validate on blur */
  form.querySelectorAll('input, textarea, select').forEach(function (field) {
    field.addEventListener('blur', function () { validateField(field); });
  });

  /* ----- Submit via Formspree (emails to configured recipient) ----- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    /* Validate all required fields */
    var fields = form.querySelectorAll('[required]');
    var allValid = true;
    fields.forEach(function (f) {
      if (!validateField(f)) allValid = false;
    });
    if (!allValid) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    successMsg.hidden = true;
    errorMsg.hidden   = true;

    var data = new FormData(form);

    fetch(FORMSPREE_ACTION, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(function (response) {
      if (response.ok) {
        successMsg.hidden = false;
        form.reset();
      } else {
        return response.json().then(function (json) {
          throw new Error(json.error || 'Submission failed.');
        });
      }
    })
    .catch(function () {
      errorMsg.hidden = false;
    })
    .finally(function () {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    });
  });

})();
