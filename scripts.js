/* ─────────────────────────────────────────────────────────
   SHARED SCRIPTS — Sunshine Produce
   ───────────────────────────────────────────────────────── */

/* ── Scroll reveal ── */
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  // Immediately reveal anything already in view on load
  window.addEventListener('load', function () {
    document.querySelectorAll('.reveal').forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('visible');
    });
  });
}());

/* ── Mobile nav toggle ── */
(function () {
  var hamburger = document.querySelector('.nav-hamburger');
  var mobileNav = document.querySelector('.nav-mobile');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', function () {
    var isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close when any mobile nav link is tapped
  mobileNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}());
