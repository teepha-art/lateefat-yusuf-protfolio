/* ============================================================
   NAV — hamburger side drawer
   ============================================================ */
(function () {
    const btn = document.querySelector('.nav__hamburger');
    const menu = document.querySelector('.nav__mobile-menu');
    if (!btn || !menu) return;

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'nav__overlay';
    menu.parentNode.insertBefore(overlay, menu.nextSibling);

    function openMenu() {
        btn.classList.add('is-open');
        menu.classList.add('is-open');
        overlay.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        btn.classList.remove('is-open');
        menu.classList.remove('is-open');
        overlay.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', function () {
        if (btn.classList.contains('is-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });

    // Close on overlay click
    overlay.addEventListener('click', function () {
        closeMenu();
    });
})();
