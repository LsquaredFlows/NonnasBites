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

/**
 * Full menu: hidden until VIEW FULL MENU or nav MENU is clicked (same page)
 */
(function () {
  const fullMenu = document.getElementById('full-menu');
  if (!fullMenu) return;

  function showMenuAndScroll() {
    fullMenu.classList.add('full-menu-visible');
    requestAnimationFrame(function () {
      fullMenu.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  document.querySelectorAll('a[href="#full-menu"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      showMenuAndScroll();
    });
  });

  if (window.location.hash === '#full-menu') {
    fullMenu.classList.add('full-menu-visible');
  }

  var closeBtn = fullMenu.querySelector('.menu-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      fullMenu.classList.remove('full-menu-visible');
      if (window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    });
  }
})();
