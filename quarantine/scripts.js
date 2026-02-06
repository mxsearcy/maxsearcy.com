function goHome() {
  location.href = "http://maxsearcy.com";
}

function toggleMenu() {
var content = document.getElementById("menuContent");
var otherContent = document.getElementById('menuContent2');
if (content.style.display === "block") {
  content.style.display = "none";
  otherContent.style.display ='none';
} else {
  content.style.display = "block";
  otherContent.style.display = 'block';
}
}

function showFooter() {
document.getElementById('footer').style.bottom = '0';
}
function hideFooter() {
document.getElementById('footer').style.bottom = '-50px'; // Adjust this value to match the footer's height
}
let timeout = null;
window.onscroll = () => {
window.clearTimeout(timeout);

document.getElementById('footer').onmouseover = () => {
showFooter();
}

document.getElementById('footer').onmouseleave = () => {
hideFooter  ();
}

showFooter();

timeout = window.setTimeout(() => {
  hideFooter();
}, 1550);
}

function iubendaReview() {
  var iubendaCard = document.getElementById('iubendaCard');
  var iubendaReviewCard = document.getElementById('iubendaReviewCard');
  if (iubendaCard.style.display === 'none' & iubendaReviewCard.style.display === 'block') {
    iubendaCard.style.display = 'block';
    iubendaReviewCard.style.display = 'none'
  }
  else {
    iubendaCard.style.display = 'none';
    iubendaReviewCard.style.display = 'block'
  }
}
function heraldReview() {
  var heraldCard = document.getElementById('heraldCard');
  var heraldReviewCard = document.getElementById('heraldReviewCard');
  if (heraldCard.style.display === 'none' & heraldReviewCard.style.display === 'block') {
    heraldCard.style.display = 'block';
    heraldReviewCard.style.display = 'none'
  }
  else {
    heraldCard.style.display = 'none';
    heraldReviewCard.style.display = 'block'
  }
}
function extraReview() {
  var extraCard = document.getElementById('extraCard');
  var extraReviewCard = document.getElementById('extraReviewCard');
  if (extraCard.style.display === 'none' & extraReviewCard.style.display === 'block') {
    extraCard.style.display = 'block';
    extraReviewCard.style.display = 'none'
  }
  else {
    extraCard.style.display = 'none';
    extraReviewCard.style.display = 'block'
  }
}

window.heraldReview = heraldReview;
window.iubendaReview = iubendaReview;

function sample(sampleID) {
location.href = "/" + sampleID;
}

