// === Main JS with Inline Validation ===
document.addEventListener('DOMContentLoaded', () => {
  // Dynamic year in footer
  const yearSpans = document.querySelectorAll('[id^="year"]');
  yearSpans.forEach(span => span.textContent = new Date().getFullYear());

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
      navToggle.setAttribute('aria-expanded', !expanded);
      siteNav.classList.toggle('open');
    });
  }

  // Animate on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

  // Contact form validation with inline errors
  const form = document.getElementById('contact');
  if (form) {
    const status = document.getElementById('form-status');

    // Utility: create error span
    function showError(input, message) {
      let error = input.parentElement.querySelector('.error-msg');
      if (!error) {
        error = document.createElement('span');
        error.className = 'error-msg';
        error.style.color = 'red';
        error.style.fontSize = '0.9rem';
        input.parentElement.appendChild(error);
      }
      error.textContent = message;
      input.style.border = '2px solid red';
    }

    function clearError(input) {
      let error = input.parentElement.querySelector('.error-msg');
      if (error) error.textContent = '';
      input.style.border = '1px solid #ccc';
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;

      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      // Validate name
      if (!name.value.trim()) {
        showError(name, 'Name is required.');
        valid = false;
      } else {
        clearError(name);
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        showError(email, 'Email is required.');
        valid = false;
      } else if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Enter a valid email.');
        valid = false;
      } else {
        clearError(email);
      }

      // Validate message
      if (!message.value.trim()) {
        showError(message, 'Message cannot be empty.');
        valid = false;
      } else {
        clearError(message);
      }

      if (valid) {
        status.textContent = 'Message sent successfully!';
        status.style.color = 'green';
        form.reset();
        form.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
      } else {
        status.textContent = 'Please fix the errors above.';
        status.style.color = 'red';
      }
    });
  }
});
