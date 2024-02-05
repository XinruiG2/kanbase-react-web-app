function toggleMenu() {
    var menu = document.getElementById("fullPageMenu");
    if (menu.style.width == '100%') {
        menu.style.width = '0';
    } else {
        menu.style.width = '100%';
    }
}