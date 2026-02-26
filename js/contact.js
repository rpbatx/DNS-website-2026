/* === CONTACT.JS — Dietary Network Services ===
   Handles validation and fetch submission for the contact page form.
   On success: form resets silently.
   On error: shows floating toast notification.
   ============================================================ */

(function initContactForm() {
  'use strict';

  var FORMSPREE_ACTION = 'https://formspree.io/f/xbdawwpg';

  /* Rate limiting: prevent resubmission within 30 seconds */
  var COOLDOWN_MS = 30000;
  var lastSubmitTime = 0;

  var form      = document.getElementById('contact-form');
  if (!form) return; /* Not on the contact page — exit early */

  var submitBtn = form.querySelector('[type="submit"]');

  /* ----- Toast notification (type: 'success' | 'error') ----- */
  function showToast(msg, type) {
    var toast = document.createElement('div');
    toast.className = 'toast-notification' + (type === 'success' ? ' toast-success' : '');
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(function () {
      toast.classList.add('toast-fade-out');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
    }, 5000);
  }

  /* ----- Field Validation ----- */
  function validateField(input) {
    var errorEl = document.getElementById(input.id + '-error');
    if (!errorEl) return true;

    var valid   = true;
    var message = '';

    if (input.required && !input.value.trim()) {
      valid   = false;
      message = 'This field is required.';
    } else if (input.type === 'email' && input.value.trim() && !input.validity.valid) {
      valid   = false;
      message = 'Please enter a valid email address.';
    } else if (input.tagName === 'TEXTAREA' && input.minLength > 0 && input.value.trim().length < input.minLength) {
      valid   = false;
      message = 'Please enter at least ' + input.minLength + ' characters.';
    } else if (input.type === 'checkbox' && input.required && !input.checked) {
      valid   = false;
      message = 'Please confirm your consent to continue.';
    }

    errorEl.textContent = message;
    input.setAttribute('aria-invalid', valid ? 'false' : 'true');
    return valid;
  }

  function validateAll() {
    var fields   = form.querySelectorAll('[required]');
    var allValid = true;
    fields.forEach(function (field) {
      if (!validateField(field)) allValid = false;
    });
    return allValid;
  }

  /* ----- Blur / Input Validation ----- */
  form.querySelectorAll('input, textarea, select').forEach(function (field) {
    field.addEventListener('blur', function () {
      if (field.value !== '' || field === document.activeElement) {
        validateField(field);
      }
    });

    field.addEventListener('input', function () {
      var errorEl = document.getElementById(field.id + '-error');
      if (errorEl && field.getAttribute('aria-invalid') === 'true') {
        validateField(field);
      }
    });
  });

  /* ----- Submit Handler ----- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    /* Client-side rate limiting */
    var now = Date.now();
    if (now - lastSubmitTime < COOLDOWN_MS) {
      var remaining = Math.ceil((COOLDOWN_MS - (now - lastSubmitTime)) / 1000);
      showToast('Please wait ' + remaining + ' seconds before sending another message.');
      return;
    }

    /* Run full validation */
    if (!validateAll()) {
      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    submitBtn.disabled    = true;
    submitBtn.textContent = 'Sending\u2026';

    var data = new FormData(form);

    fetch(FORMSPREE_ACTION, {
      method:  'POST',
      body:    data,
      headers: { 'Accept': 'application/json' }
    })
    .then(function (response) {
      if (response.ok) {
        lastSubmitTime = Date.now();
        form.reset();
        showToast('Thank you — we look forward to meeting you!', 'success');
      } else {
        return response.json().then(function (json) {
          throw new Error(json.error || 'Submission failed.');
        });
      }
    })
    .catch(function () {
      showToast('Something went wrong. Please try again or call us at 512-335-2250.');
    })
    .finally(function () {
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Send Message';
    });
  });

})();
