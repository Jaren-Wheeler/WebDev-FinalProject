function toggleDarkMode() {
    $("#toggle-mode").click(function() {
    document.body.classList.toggle("light-mode");
    })}

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
            $("#carousel").slick("unslick"); // make sure old carousel is resetted when a new project is clicked on
            $(".github-link-btn").remove(); // remove dynamically created link buttons, so they don't get repeatedly created. 
        }
    });
}

// creates the carousel for the project
function createCarousel(project) {
    
    $("#carousel").empty(); // empty the carousel
    let images = []; // intialize image array

    // for different project classes, add the corresponding images to the image array
    if (project.hasClass("p-one")) {
        images = [
            "img/javalogin.png",
            "img/javadashboard.png",
            "img/inventorylist.png"
        ];
    }
    if (project.hasClass("p-two")) {
        images = [
            "img/darkmodedashboard.png",
            "img/login_budget.png",
            "img/addInfobudget.png"
        ];
    }
    if (project.hasClass("p-three")) {
        images = [
            "img/etchasketch.png",
            "img/etchasketchgridnum.png",
            "img/etchasketch2.png"
        ];
    }
    if (project.hasClass("p-four")) {
        images = [
            "img/ubereats.png",
            "img/ubereats2.png",
            "img/ubereats3.png"
        ];
    }
    if (project.hasClass("p-five")) {
        images = [
            "img/westjet.png",
            "img/westjet2.png",
            "img/westjet3.png"
        ];
    }
    if (project.hasClass("p-six")) {
        images = [
            "img/airbnb.png",
            "img/airbnb2.png",
            "img/airbnb3.png"
        ];
    }

    // for each of them, append to the empty carousel div in the projects.html file
    images.forEach(function(i) {
        $("#carousel").append(`<div><img src="${i}" alt="project images"></div>`)
    });
    
    // if the carousel hasn't been initalized already, perform slick. If it has, do nothing
    if (!$("#carousel").hasClass("slick-initialized")) {
        $("#carousel").slick({
            infinite:true,
            autoplay:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            autoplaySpeed: 5000
        })
    }
   
}

//Bouncing Grren Balls
function addBouncingBallAnimation() {
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
}

// handles the functionality when clicking 
function viewProject() {
    $(".project").click(function(e) {

        let project = $(this); // project being clicked

        // depending on the class of the project, display the information and show the image.
        if (project.hasClass("p-one")) {
            $("#project-desc").text("Inventory Management System");
            $("#project-clicked-container p").text(`Inventory Management System is a full-stack application designed in Java using Maven, incorporating
                libraries such as SQLite and Swing. It is designed to help businesses keep track of their inventory as well as adding and removing
                items.`);
            $("#pc-description-container").append(`<button class="github-link-btn"><a href="https://github.com/Jaren-Wheeler/InventoryManager">Check it out!</a></button>`)
        } 
        if (project.hasClass("p-two")) {
            
            $("#project-desc").text("Budget Management System");
            $("#project-clicked-container p").text(`Budget Manager is a full-stack application developed in
                C#/.NET framework Windows Presentation Foundation (WPF). It utilizes SQLite for database CRUD interactions, 
                and includes features such as a login system, and LiveCharts for real-time updating visuals, and a dark mode toggling
                functionality.`);
            $("#pc-description-container").append(`<button class="github-link-btn"><a href="https://github.com/Jaren-Wheeler/BudgetManagementApp">Check it out!</a></button>`)
        } 
        if (project.hasClass("p-three")) {
            $("#project-desc").text("Project 3");
            $("#project-clicked-container p").text(`This is the description for project 3`); 
            $("#pc-description-container").append(`<button class="github-link-btn"><a href="https://github.com/Jaren-Wheeler/etch_a_sketch">Check it out!</a></button>`)
        }
        if (project.hasClass("p-four")) {
            $("#project-desc").text("Project 4");
            $("#project-clicked-container p").text(`This is the description for project 4`); 
        }
        if (project.hasClass("p-five")) {
            $("#project-desc").text("Project 5");
            $("#project-clicked-container p").text(`This is the description for project 5`); 
        } 
        if (project.hasClass("p-six")) {
            $("#project-desc").text("Project 6");
            $("#project-clicked-container p").text(`This is the description for project 6`); 
        }

        createCarousel(project); // call the createCarousel function
    })

}

// apply sortable ui interaction to projects
function projectSortable() {
    $(".project-container").sortable();
}

// call the functions
$(document).ready(function() {
    addBouncingBallAnimation();
    toggleDarkMode();
    hoverProject();
    clickProject();
    viewProject();
    projectSortable();
})
