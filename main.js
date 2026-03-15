/**
 * NONNA — Nav: hide on scroll down, show on scroll up
 */

(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  let lastScrollY = window.scrollY;
  const scrollThreshold = 60;
  const mobileBreakpoint = 768;
  const topThreshold = 10;

  function updateNav() {
    const scrollY = window.scrollY;
    const isMobile = window.innerWidth <= mobileBreakpoint;

    if (isMobile) {
      /* On phone: show nav only when scrolled all the way to the top */
      if (scrollY <= topThreshold) {
        nav.classList.remove('scrolled', 'nav-hidden');
      } else {
        nav.classList.add('scrolled', 'nav-hidden');
      }
    } else {
      if (scrollY <= 20) {
        nav.classList.remove('scrolled', 'nav-hidden');
      } else {
        nav.classList.add('scrolled');
        if (scrollY > scrollThreshold) {
          if (scrollY > lastScrollY) {
            nav.classList.add('nav-hidden');
          } else {
            nav.classList.remove('nav-hidden');
          }
        }
      }
    }
    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();
