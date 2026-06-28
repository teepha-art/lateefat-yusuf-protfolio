(function () {
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var input = form.querySelector('.contact__input');
            var message = input ? input.value.trim() : '';
            if (!message) return;

            var email = 'bimbolateeefat@gmail.com';
            var subject = encodeURIComponent('Portfolio inquiry');
            var body = encodeURIComponent(message);
            window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;

            input.value = '';
        });
    }

    var emailEl = document.getElementById('contact-email');
    if (emailEl) {
        var tooltip = document.createElement('span');
        tooltip.className = 'contact__email-tooltip';
        tooltip.textContent = 'Copy';
        emailEl.appendChild(tooltip);

        emailEl.addEventListener('click', function () {
            navigator.clipboard.writeText('bimbolateeefat@gmail.com').then(function () {
                tooltip.textContent = 'Copied!';
                setTimeout(function () {
                    tooltip.textContent = 'Copy';
                }, 1500);
            });
        });
    }
})();
