document.addEventListener('DOMContentLoaded', () => {
  const invertButton = document.getElementById('invert-button');
  invertButton.addEventListener('click', toggleDarkMode);

  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  applyDarkMode(isDarkMode);
});

const lightModeColor = 'rgb(0, 0, 0)';
const darkModeColor = 'rgb(242, 28, 121)';
const rootDarkColor = 'rgba(37, 37, 37, 0.7)';
const rootLightColor = 'rgb(0,0,0)'
const d2 = document.getElementById('div2');

function applyDarkMode(isDarkMode) {
  const root = document.documentElement;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const gallery = document.getElementById("gallery");
  const hand = document.querySelectorAll('.ta-ta');
  
  if (isDarkMode) {
    root.classList.add('invert');
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
    gallery.style.filter = 'invert(100%)';
    hand.forEach(element => element.style.filter = 'invert(100%)');
    // Change font color of strong elements for dark mode
    [...document.getElementsByTagName('strong')].forEach(el => {
      el.style.color = darkModeColor;
      // el.style.textDecoration = 'none';
    });
    d2.style.color = rootDarkColor;
  } else {
    root.classList.remove('invert');
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
    gallery.style.filter = 'invert(0%)';
    hand.forEach(element => element.style.filter = 'invert(0%)');
    // Change font color of strong elements for light mode
    [...document.getElementsByTagName('strong')].forEach(el => {
      el.style.color = lightModeColor;
      // el.style.textDecoration = 'underline';
    });
    d2.style.color = rootLightColor;
  }
}

function toggleDarkMode() {
  const root = document.documentElement;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const gallery = document.getElementById("gallery");
  const hand = document.querySelectorAll('.ta-ta');
  
  root.classList.toggle('invert');
  sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";
  moonIcon.style.display = moonIcon.style.display === "none" ? "inline" : "none";
  
  const isDarkMode = root.classList.contains('invert');
  localStorage.setItem('darkMode', isDarkMode);
  
  gallery.style.filter = isDarkMode ? 'invert(100%)' : 'invert(0%)';
  hand.forEach(element => element.style.filter = isDarkMode ? 'invert(100%)' : 'invert(0%)');
  
  [...document.getElementsByTagName('strong')].forEach(el => {
    el.style.color = isDarkMode ? darkModeColor : lightModeColor;
    // el.style.textDecoration = isDarkMode ? 'none' : 'underline';
  });
  d2.style.color = isDarkMode ? rootDarkColor : rootLightColor;
}
