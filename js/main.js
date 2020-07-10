// Sidebar toggle
function sideNavAnimaton() {
    if (document.getElementById("sideNav").style.right == "-250px") {
        document.getElementById("sideNav").style.right = "0";
    } else {
        document.getElementById("sideNav").style.right = "-250px";
    }
}

// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});