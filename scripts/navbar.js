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

// event listeners for mouse clicks
menuButton.addEventListener("mousedown", openNav);
closeButton.addEventListener("mousedown", closeNav);

// event listeners for touch screens
menuButton.addEventListener("touchend", openNav);
closeButton.addEventListener("touchend", closeNav);

// Div click test ============================================
var title = document.getElementsByClassName('speaker-title');
var speaker = document.getElementsByClassName('speaker');
var opened = false;
console.log(title);

for (let i = 0; i < 6; i++) {
    title[i].addEventListener('mousedown', function () {
      if (title[i].style.backgroundColor !== 'blue') {
        title[i].style.backgroundColor = 'blue';
      } else {
        title[i].style.backgroundColor = 'black';
      }
    });
}
// instead of checking if opened is true or false, try measuring height of div
