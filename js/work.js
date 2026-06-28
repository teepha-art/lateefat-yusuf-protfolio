(function () {
    var cards = document.querySelectorAll('.work__card');
    var dots = document.querySelectorAll('.work__timeline-dot');
    var workSection = document.querySelector('#work');
    var fillLine = document.querySelector('.work__timeline-fill');
    if (cards.length === 0) return;

    function updateFillLine() {
        var rect = workSection.getBoundingClientRect();
        var viewH = window.innerHeight;
        var scrolled = -rect.top + viewH;
        var total = rect.height + viewH;
        var progress = Math.max(0, Math.min(1, scrolled / total));
        fillLine.style.height = (progress * 100) + '%';
    }

    function updateActive() {
        var bestIdx = 0;
        var bestRatio = 0;

        cards.forEach(function (card, i) {
            var rect = card.getBoundingClientRect();
            var viewH = window.innerHeight;
            var visible = Math.min(rect.bottom, viewH) - Math.max(rect.top, 0);
            var ratio = visible / rect.height;
            if (ratio > bestRatio) {
                bestRatio = ratio;
                bestIdx = i;
            }
        });

        dots.forEach(function (dot, i) {
            dot.classList.remove('is-active', 'is-past');
            if (i < bestIdx) dot.classList.add('is-past');
            if (i === bestIdx) dot.classList.add('is-active');
        });

        updateFillLine();
    }

    var observer = new IntersectionObserver(updateActive, {
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
    });

    cards.forEach(function (card) {
        observer.observe(card);
    });

    window.addEventListener('scroll', updateFillLine);

    updateActive();
})();
