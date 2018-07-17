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
var speaker = document.getElementsByClassName('speaker');
var title = document.getElementsByClassName('speaker-title');
var arrow = document.querySelectorAll('.right-arrow');
var bio = document.querySelectorAll('.bio');
var opened = false;

for (let i = 0; i < 6; i++) {
    title[i].addEventListener('mousedown', function () {
      if (arrow[i].style.transform === 'rotate(0deg)') {
        arrow[i].style.transform = 'rotate(90deg)';
        bio[i].style.display = 'block';
        speaker[i].style.height = 'auto';
      } else {
        arrow[i].style.transform = 'rotate(0deg)';
        speaker[i].style.height = '50px';
        bio[i].style.display = 'none';
      }
    });
}
// instead of checking if opened is true or false, try measuring height of div
