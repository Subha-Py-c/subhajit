document.addEventListener('DOMContentLoaded', () => {
  const invertButton = document.getElementById('invert-button');
  invertButton.addEventListener('click', toggleDarkMode);

  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  applyDarkMode(isDarkMode);
});

var strongClrLightMode = 'rgb(0, 0, 0)';
var strongClrDarkMode = 'rgb(242, 28, 121)';

const root = document.documentElement;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const hand = document.querySelectorAll('.ta-ta');


function applyDarkMode(isDarkMode) {
  if (isDarkMode) {
    root.classList.add('invert');
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";

    hand.forEach(element => element.style.filter = 'invert(100%)');
    [...document.getElementsByTagName('strong')].forEach(el => {
      el.style.color = strongClrDarkMode;
    });
  }
  else {
    root.classList.remove('invert');
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";

    hand.forEach(element => element.style.filter = 'invert(0%)');
    [...document.getElementsByTagName('strong')].forEach(el => {
      el.style.color = strongClrLightMode;
    });
  }
}

function toggleDarkMode() {
  root.classList.toggle('invert');
  sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";
  moonIcon.style.display = moonIcon.style.display === "none" ? "inline" : "none";

  const isDarkMode = root.classList.contains('invert');
  localStorage.setItem('darkMode', isDarkMode);

  hand.forEach(element => element.style.filter = isDarkMode ? 'invert(100%)' : 'invert(0%)');
  [...document.getElementsByTagName('strong')].forEach(el => {
    el.style.color = isDarkMode ? strongClrDarkMode : strongClrLightMode;
  });
}
