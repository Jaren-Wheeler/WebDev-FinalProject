
$(document).ready(function(){
    $("#accordion").accordion();
});
    
$(document).ready(function() {
    $("#tabs" ).tabs();
});

const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

const quoteText = document.getElementById("quote-text");
const quoteBtn = document.getElementById("new-quote-btn");

async function fetchQuote() {
    try {
        const response = await fetch("https://qapi.vercel.app/api/random");
        const data = await response.json();
        quoteText.textContent = `"${data.quote}"`;
    } catch (error) {
        quoteText.textContent = "Failed to load quote. Try again.";
        console.error("Error fetching quote:", error);
    }
}

quoteBtn.addEventListener("click", fetchQuote);