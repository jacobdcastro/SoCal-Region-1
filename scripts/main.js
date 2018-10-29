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
var speaker = document.querySelectorAll('.speaker');
var title = document.querySelectorAll('.speaker-title');
var arrow = document.querySelectorAll('.right-arrow');
var bio = document.querySelectorAll('.bio');
var opened = [ ];
// for test
const cards = document.querySelectorAll('.description-card');
console.log(cards);
const popup = document.querySelectorAll('.popup');
// Cards for Breakout Talks
const richShepherdCard = document.getElementById('richShepherdTalk');
const richShepherdPopup = document.getElementById('richShepherdPopup');
const billDogteromCard = document.getElementById('billDogteromTalk');
const billDogteromPopup = document.getElementById('billDogteromPopup');
const joeMossCard = document.getElementById('joeMossTalk');
const joeMossPopup = document.getElementById('joeMossPopup');
const ricardoQuintanaCard = document.getElementById('ricardoQuintanaTalk');
const ricardoQuintanaPopup = document.getElementById('ricardoQuintanaPopup');
const joannJohnsonCard = document.getElementById('joannJohnsonTalk');
const joannJohnsonPopup = document.getElementById('joannJohnsonPopup');

function richShepherdTalk() {
  richShepherdPopup.style.display = 'flex';
}
function billDogteromTalk() {
  billDogteromPopup.style.display = 'flex';
}
function joeMossTalk() {
  joeMossPopup.style.display = 'flex';
}
function ricardoQuintanaTalk() {
  ricardoQuintanaPopup.style.display = 'flex';
}
function joannJohnsonTalk() {
  joannJohnsonPopup.style.display = 'flex';
}

function closePopup() {
  richShepherdPopup.style.display = 'none';
  billDogteromPopup.style.display = 'none';
  joeMossPopup.style.display = 'none';
  ricardoQuintanaPopup.style.display = 'none';
  joannJohnsonPopup.style.display = 'none';
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
