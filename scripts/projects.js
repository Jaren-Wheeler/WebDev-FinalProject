
// handles the hovering event on each project card
function hoverProject() {

    
    $(".project").hover(
        function() {
            $(this).addClass("projectHovered");
        },
        function() {
            $(this).removeClass("projectHovered");
        }  
    );
}

function clickProject() {
    $(".project").click(function() {
        $("#project-clicked-container").show('fast');
    });

     // Close project clicked window when clicking outside of it
     $(document).click(function(event) {
        // looks for closest ancestor element that matches the selector. length returns 0 if the element is outside
        if (!$(event.target).closest("#project-clicked-container, .project").length) {
            $("#project-clicked-container").hide('fast');
        }
    });
}

// call the functions
$(document).ready(function() {
    hoverProject();
    clickProject();
})
