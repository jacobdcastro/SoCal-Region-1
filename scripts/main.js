var menuButton = document.getElementById("mobileMenuButton");
var closeButton = document.getElementById("closeButton");
var opened = false;

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
var w = window.innerWidth;
var opened = [ ];
var speakerHeight;

function closeDes(e) {
  console.log('Close Popup Div');
  // use 'this'?
}

function welcome() {
  console.log("Welcome Popup Shows");
  document.getElementById('welcome').styles.display = 'block';
}

function morningSesh() {
  console.log("Morning Session Popup Shows");
  document.getElementById('morning').styles.display = 'block';
}

function breakoutOne() {
  console.log("Breakout 1 Popup Shows");
  document.getElementById('breakout1').styles.display = 'block';
}

function breakoutTwo() {
  console.log("Breakout 2 Popup Shows");
  document.getElementById('breakout2').styles.display = 'block';
}

function afternoonSesh() {
  console.log("Afternoon Session Popup Shows");
  document.getElementById('afternoon').styles.display = 'block';
}

function closing() {
  console.log("Closing Popup Shows");
  document.getElementById('closing').styles.display = 'block';
}

for (let i = 0; i < 6; i++) {
  opened[i] = false;
  title[i].addEventListener('mousedown', function () {
    if (opened[i] === false) {
      arrow[i].style.transform = 'rotate(90deg)';
      bio[i].style.display = 'block';
      speaker[i].style.height = 'auto';
      opened[i] = true;
    } else {
      arrow[i].style.transform = 'rotate(0deg)';
      bio[i].style.display = 'none';
      opened[i] = false;
    }
  });
}
