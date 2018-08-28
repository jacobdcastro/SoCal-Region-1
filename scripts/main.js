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

// Div click ============================================
var speaker = document.getElementsByClassName('speaker');
var title = document.getElementsByClassName('speaker-title');
var arrow = document.querySelectorAll('.right-arrow');
var bio = document.querySelectorAll('.bio');
var w = window.innerWidth;
var opened = [ ];
var speakerHeight;
// for test
const cards = document.getElementsByClassName("description-card");
console.log(cards);
const popup = document.getElementById("popup");

for (let i = 0; i <= cards.length; i++) {
  cards[i].addEventListener('mouseup', function () {
    console.log("Button Works!");
    cards[i].style.borderBottom = "none";
    cards[i].style.height = "145px";
    cards[i].style.marginBottom = "20px";

    popup.style.display = "block";
  });
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
