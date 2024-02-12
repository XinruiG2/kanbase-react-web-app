function toggleKanbasNavigation() {
    var menu = document.getElementById("fullPageMenu");
    if (menu.style.width == '100%') {
        menu.style.width = '0';
    } else {
        menu.style.width = '100%';
    }
}

function toggleCourseNavigation() {
    var menu = document.getElementById("partPageMenu");
    if (menu.style.height == '66%') {
        menu.style.height = '0';
    } else {
        menu.style.height = '66%';
    }

    var icon = document.querySelector(".wd-home-navbar-expand"); 
    if (icon.classList.contains("fa-caret-down")) {
        icon.classList.remove("fa-caret-down");
        icon.classList.add("fa-times");
    } else {
        icon.classList.add("fa-caret-down");
        icon.classList.remove("fa-times");
    }
}