

document.addEventListener('DOMContentLoaded', () => {
  const invertButton = document.getElementById('invert-button');
  invertButton.addEventListener('click', toggleDarkMode);
});






document.addEventListener('DOMContentLoaded', ()=>{
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
      const root = document.documentElement;
      const sunIcon = document.getElementById("sun-icon");
      const moonIcon = document.getElementById("moon-icon");
      root.classList.add('invert');
      sunIcon.style.display = "none";
      moonIcon.style.display = "inline"
  }
}
);

function toggleDarkMode() {
  const root = document.documentElement;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const gallery = document.getElementById("gallery"); // assuming you have an element with id "gallery"
  const hand = document.querySelectorAll('.ta-ta');
  
  root.classList.toggle('invert');
  sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";
  moonIcon.style.display = moonIcon.style.display === "none" ? "inline" : "none";
  
  const isDarkMode = root.classList.contains('invert');
  localStorage.setItem('darkMode', isDarkMode);
  
  // Apply filter to gallery
  gallery.style.filter = isDarkMode ? 'invert(100%)' : 'invert(0%)';
  
  // Apply filter to elements with class "ta-ta"
  hand.forEach(function(element) {
      element.style.filter = isDarkMode ? 'invert(100%)' : 'invert(0%)';
  });
}


// prevous code
// function toggleDarkMode() {
//   const root = document.documentElement;
//   const sunIcon = document.getElementById("sun-icon");
//   const moonIcon = document.getElementById("moon-icon");
//   const gallery = document.getElementById("gallery"); // assuming you have an element with id "gallery"
//   const hand = document.querySelectorAll('.ta-ta');
  
//   root.classList.toggle('invert');
//   sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";
//   moonIcon.style.display = moonIcon.style.display === "none" ? "inline" : "none";
  
//   const isDarkMode = root.classList.contains('invert');
//   localStorage.setItem('darkMode', isDarkMode);
  
//   // Apply filter to gallery
//   if (isDarkMode) {
//       gallery.style.filter = 'invert(100%)';
//   } else {
//       gallery.style.filter = 'invert(0%)';
//   }
  
//   // Apply filter to elements with class "ta-ta"
//   hand.forEach(function(element) {
//       if (isDarkMode) {
//           element.style.filter = 'invert(100%)';
//       } else {
//           element.style.filter = 'invert(0%)';
//       }
//   });
// }
