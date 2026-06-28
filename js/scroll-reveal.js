/* ============================================================
   SCROLL REVEAL — fade-up sections on scroll into view
   ============================================================ */
(function () {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReduced.matches) return;

    var els = document.querySelectorAll('.reveal');
    if (els.length === 0) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    els.forEach(function (el) {
        observer.observe(el);
    });
})();
