
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

// handles functionality when a project card is clicked.
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



// handles the functionality when clicking 
function viewProject() {
    $(".project").click(function(e) {
        let project = $(e.target); // grab the specific project being clicked

        // depending on the class of the project, display the information and show the image.
        if (project.hasClass("p-one")) {
            $("#project-desc").text("Inventory Management System");
            $("#project-clicked-container p").text(`Inventory Management System is a full-stack application designed in Java using Maven, incorporating
                libraries such as SQLite and Swing. It is designed to help businesses keep track of their inventory as well as adding and removing
                items.`);
        } 
        if (project.hasClass("p-two")) {
            projectCarousel();
            $("#project-desc").text("Budget Management System");
            $("#project-clicked-container p").text(`Budget Manager is a full-stack application developed in
                C#/.NET framework Windows Presentation Foundation (WPF). It utilizes SQLite for database CRUD interactions, 
                and includes features such as a login system, and LiveCharts for real-time updating visuals, and a dark mode toggling
                functionality.`);   
        } 
        if (project.hasClass("p-three")) {
            $("#project-desc").text("Project 3");
        }
        if (project.hasClass("p-four")) {
            $("#project-desc").text("Project 4");
        }
        if (project.hasClass("p-five")) {
            $("#project-desc").text("Project 5");
        } 
        if (project.hasClass("p-six")) {
            $("#project-desc").text("Project 6");
        }
    })

}

function projectSortable() {
    $(".project-container").sortable();
}

function projectCarousel() {
    $("#carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
}

// call the functions
$(document).ready(function() {
    hoverProject();
    clickProject();
    viewProject();
    projectSortable();
})
