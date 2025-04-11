document.addEventListener("DOMContentLoaded", function () {
    // Contact form submit handler
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        const email = $('#email').val();
        const message = $('#message').val();
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        if (!emailPattern.test(email)) {
            $('#error-message').show();
            return;
        } else {
            $('#error-message').hide();
        }

        const subject = encodeURIComponent("New message from contact form");
        const body = encodeURIComponent("From: " + email + "\n\nMessage:\n" + message);
        window.location.href = `mailto:jkgilbert@live.ca?subject=${subject}&body=${body}`;
    });

    // Toggle dark/light mode
    const toggleBtn = document.getElementById("toggle-mode");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
    }
});