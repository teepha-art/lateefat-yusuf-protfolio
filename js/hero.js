/* ============================================================
   HERO — auto-cycling carousel, 4 scenes, 3.6s hold + 0.7s fade
   ============================================================ */
(function () {
    const scenes = document.querySelectorAll('.hero__scene');
    if (scenes.length === 0) return;

    // Respect prefers-reduced-motion: show scene 1 static
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReduced.matches) {
        scenes[0].classList.add('is-active');
        return;
    }

    var current = 0;
    var timer = null;

    // Activate first scene
    scenes[0].classList.add('is-active');
    scheduleNext();

    function getHold() {
        return current === 1 ? 3000 : 1500;
    }

    function scheduleNext() {
        timer = setTimeout(nextScene, getHold());
    }

    function nextScene() {
        scenes[current].classList.remove('is-active');
        current = (current + 1) % scenes.length;
        scenes[current].classList.add('is-active');
        scheduleNext();
    }

    // Pause when tab is hidden
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            clearTimeout(timer);
        } else {
            scheduleNext();
        }
    });
})();
