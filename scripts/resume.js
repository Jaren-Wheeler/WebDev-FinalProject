$(document).ready(function() {
    $("#toggle-mode").click(function() {
        $("body").toggleClass("light-mode");
      });
})

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
    