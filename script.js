const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));








// CURSOR 
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

const invert_button = document.getElementById('invert-button');
const hello = document.getElementById('hello');
const h = document.querySelector('.letter')
const skill = document.getElementById('skill')
const pro = document.getElementById('pro')
const con = document.getElementById('con')

hello.addEventListener('mouseover', function(){
  cursor.style.transform = 'scale(3)';
});

hello.addEventListener('mouseout', function(){
  cursor.style.transform = 'scale(1)';
});


invert_button.addEventListener('mouseover', function(){
  cursor.style.transform = 'scale(2.4)';
  invert_button.style.filter = 'invert(100%)';
});

invert_button.addEventListener('mouseout', function(){
  cursor.style.transform = 'scale(1)';
  invert_button.style.filter = 'invert(0%)';
});


skill.addEventListener('mouseover', function(){
  cursor.style.transform = 'scale(3)';
});

skill.addEventListener('mouseout', function(){
  cursor.style.transform = 'scale(1)';
});


pro.addEventListener('mouseover', function(){
  cursor.style.transform = 'scale(3)';
});

pro.addEventListener('mouseout', function(){
  cursor.style.transform = 'scale(1)';
});


con.addEventListener('mouseover', function(){
  cursor.style.transform = 'scale(3)';
});

con.addEventListener('mouseout', function(){
  cursor.style.transform = 'scale(1)';
});








// DARK MODE AND LOCAL STORAGE
// Check if dark mode preference is stored in localStorage and apply it
document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  if (isDarkMode) {
      const root = document.documentElement;
      const sunIcon = document.getElementById("sun-icon");
      const moonIcon = document.getElementById("moon-icon");

      root.classList.add('invert');
      sunIcon.style.display = "none";
      moonIcon.style.display = "inline";
  }
});

function toggleDarkMode() {
  const root = document.documentElement;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  root.classList.toggle('invert');

  // Toggle visibility of sun and moon icons
  sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";
  moonIcon.style.display = moonIcon.style.display === "none" ? "inline" : "none";

  // Save the current mode preference to localStorage
  const isDarkMode = root.classList.contains('invert');
  localStorage.setItem('darkMode', isDarkMode);
}









// Smooth scroll functionality with transition effect for all anchor tags
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
     // Check if the href is an external link or a link to a section within the same page
     if (this.getAttribute('href').startsWith('#') || !this.getAttribute('href').startsWith('http')) {
       e.preventDefault(); // Prevent the default jump to the target
 
       const target = document.querySelector(this.getAttribute('href'));
       if (!target) return; // If the target doesn't exist, exit
 
       const targetOffset = target.offsetTop;
       const scrollDistance = Math.abs(targetOffset - window.scrollY);
       const scrollDuration = Math.min(1000, scrollDistance); // Adjust duration as needed
 
       // Smoothly scroll to the target
       scrollToTarget(targetOffset, scrollDuration);
     }
  });
 });
 
 function scrollToTarget(targetOffset, duration) {
  const startingY = window.pageYOffset;
  const diff = targetOffset - startingY;
  let start;
 
  // Use requestAnimationFrame for smoother animation
  window.requestAnimationFrame(function step(timestamp) {
     if (!start) start = timestamp;
     const time = timestamp - start;
     const percent = Math.min(time / duration, 1);
 
     // Easing function: You can adjust this for different easing effects
     const easedT = easeInOutQuad(percent);
 
     window.scrollTo(0, startingY + diff * easedT);
 
     if (time < duration) {
       window.requestAnimationFrame(step);
     }
  });
 }
 
 // Easing function for smooth transition
 function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
 }











 
 document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const viewportHeight = window.innerHeight;
  const revealThreshold = viewportHeight * 0.3; // 30% of the viewport height
 
  sections.forEach(section => {
     const sectionTop = section.getBoundingClientRect().top;
 
     // Check if the section is within the reveal threshold
     if (sectionTop <= revealThreshold) {
       // Add the 'reveal' class to the section
       section.classList.add('reveal');
     } else {
       // Remove the 'reveal' class if the section is not in the viewport
       section.classList.remove('reveal');
     }
  });
 });
 