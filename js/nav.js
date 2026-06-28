/* ============================================================
   NAV — hamburger toggle
   ============================================================ */
(function () {
    const btn = document.querySelector('.nav__hamburger');
    const menu = document.querySelector('.nav__mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
        const isOpen = btn.classList.toggle('is-open');
        menu.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            btn.classList.remove('is-open');
            menu.classList.remove('is-open');
            btn.setAttribute('aria-expanded', 'false');
        });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
            btn.classList.remove('is-open');
            menu.classList.remove('is-open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
})();
