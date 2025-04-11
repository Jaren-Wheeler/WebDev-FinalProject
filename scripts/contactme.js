//Bouncing Grren Balls
$(document).ready(function () {
    function bounceBallRight() {
        $(".bouncing-ball.ball-right")
            .animate({ top: "+=50px" }, 500)
            .animate({ top: "-=50px" }, 500, bounceBallRight);
    }

    function bounceBallLeft() {
        $(".bouncing-ball.ball-left")
            .animate({ top: "+=50px" }, 500)
            .animate({ top: "-=50px" }, 500, bounceBallLeft);
    }

    bounceBallRight();
    bounceBallLeft();
});

document.addEventListener("DOMContentLoaded", function () {
    // Contact form submit handler
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        const email = $('#email').val();
        const message = $('#message').val();
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // regex expression for the email

        // if the email input doesn't match the regex, throw an error message. Otherwise, don't/
        if (!emailPattern.test(email)) {
            $('#error-message').show();
            return;
        } else {
            $('#error-message').hide();
        }

        // create setup for connecting to user email.
        const subject = encodeURIComponent("New message from contact form");
        const body = encodeURIComponent("From: " + email + "\n\nMessage:\n" + message);
        window.location.href = `mailto:jkgilbert@live.ca?subject=${subject}&body=${body}`;
    });

    // Toggle dark/light mode
    const toggleBtn = $("#toggle-mode");
    if (toggleBtn) {
        toggleBtn.click(function() {
            $("body").toggleClass("light-mode");
        });
    }
});