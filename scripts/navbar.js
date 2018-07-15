var menuButton = document.getElementById("mobileMenuButton");
var closeButton = document.getElementById("closeButton");
var w = window.innerWidth;
var opened = false;
console.log(w);

/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    opened = true;
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    opened = false;
}

menuButton.addEventListener("mousedown", openNav);
closeButton.addEventListener("mousedown", closeNav);

menuButton.addEventListener("touchend", openNav);
closeButton.addEventListener("touchend", closeNav);

// Div click test ============================================

var speaker = document.getElementById('johnMartin');

speaker.addEventListener('onclick', function () {
  console.log('Hello, world!');
});
