(function() {
    var btn = document.getElementById('scroll-top');
    if (!btn) return;

    function toggle() {
        btn.classList.toggle('is-visible', window.scrollY > window.innerHeight);
    }

    window.addEventListener('scroll', toggle, { passive: true });
    toggle();

    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
