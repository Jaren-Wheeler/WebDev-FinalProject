// accordion JQuery widget
$(document).ready(function(){
    $("#accordion").accordion();
});
   
//tabs JQuery widget
$(document).ready(function() {
    $("#tabs" ).tabs();
});

// toggle dark mode button

$("#toggle-mode").click(function() {
    $("body").toggleClass("light-mode");
});

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

// ajax request and api call for the quote generator
function fetchQuote() {
    $(document).ready(function() {
        const xhr = new XMLHttpRequest(); //request object
        var url = "https://qapi.vercel.app/api/random"; // url for api
        xhr.open("GET", url, true); //use open of type GET on the url
    
        // when the request is finished loading, execute
        xhr.onload = function () {
            // 200 is a successful request. If successful, get the quote. Otherwise throw an error
            if (xhr.status === 200) {
                try {
                    const data = JSON.parse(xhr.responseText);
                    $("#quote-text").text(`"${data.quote}"`);
                } catch (e) {
                    $("#quote-text").text("Error parsing quote.");
                    console.error("JSON parse error:", e);
                }
            } else { // if any other status but 200 is  thrown, throw an error
                $("#quote-text").text("Failed to load quote. Try again.");
                console.error("Error fetching quote: status", xhr.status);
            }
        };
    
        xhr.send(); // execute the request
    })   
}

$("#new-quote-btn").click(fetchQuote); //event listener for the button