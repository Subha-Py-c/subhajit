
document.addEventListener('DOMContentLoaded', () => {
  const invertButton = document.getElementById('invert-button');
  invertButton.addEventListener('click', toggleDarkMode);
});

document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
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
    
    hand.forEach(function(element) {
      element.style.filter = 'invert(100%)';
    });
  } else {
    root.classList.remove('invert');
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
    
    gallery.style.filter = 'invert(0%)';
    
    hand.forEach(function(element) {
      element.style.filter = 'invert(0%)';
    });
  }
});

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
  
  hand.forEach(function(element) {
    element.style.filter = isDarkMode ? 'invert(100%)' : 'invert(0%)';
  });
}
