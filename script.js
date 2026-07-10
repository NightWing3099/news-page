document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const navClose = document.getElementById('navClose');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');
  const body = document.body;
  const navLinks = document.querySelectorAll('.nav-link');

  function openMenu() {
    nav.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('no-scroll');
    navToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', openMenu);
  navClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });

  // Close menu when a nav link is clicked (for single-page navigation)
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // ============================================
  // Dark Mode Toggle
  // ============================================
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  }

  themeToggle.addEventListener('click', function () {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});