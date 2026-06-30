// ───────────── پرده تئاتر هنگام ورود ─────────────
window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('curtainOverlay');
  if (overlay) {
    requestAnimationFrame(() => {
      setTimeout(() => overlay.classList.add('open'), 350);
    });
  }

  // ناوبری در اسکرول
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // منوی موبایل
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    mobileMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );
  }

  // افکت ظاهر شدن هنگام اسکرول
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
});
