import './functions/cursor-functions/cursor.js';
import './functions/cursor-functions/hiding-cursor.js';
import './functions/cursor-functions/cursor-scaling.js';

import './functions/nav-js/nav-appear-and-toggle-svg.js';
import './functions/nav-js/dim.js';

import './functions/skills-js/skill-card.js';

import './functions/project-js/project.js';

import './functions/utils/dark-mode.js';
import './functions/utils/hidden-classes.js';
import './functions/utils/emailing.js';
import  './functions/utils/scroll-related/smooth-scrolling.js'


// function isMobileDevice() {
//     return window.innerWidth <= 768;
// }

// if (!isMobileDevice()) {
//     import('./functions/utils/scroll-related/revel-on-scroll.js')
//         .catch(error => console.error("Failed to import revel-on-scroll.js:", error));
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const instituteData = document.querySelector('.institute__data');
//   const ballPointer = document.getElementById('ball-pointer-4');
//   const radius = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--radius'));
  
//   if (instituteData && ballPointer) {
//     const instituteDataHeight = instituteData.offsetHeight;
    
//     // Calculate the top position
//     const topPosition = -instituteDataHeight + radius * 1.5;
    
//     // Set the top position dynamically
//     ballPointer.style.top = `${topPosition}px`;
//   }
// });

// importing css

import '../css/style.css';
import '../css/components/hello.css';
import '../css/components/cursor.css';
import '../css/components/scrollbar.css';
import '../css/components/imported-fonts.css';
import '../css/components/invert-button.css';
import '../css/components/nav.css';
import '../css/components/skills.css';
import '../css/components/projects.css';
import '../css/components/contacts.css';
import '../css/components/academics.css';
import '../css/utils.css';

// importing images

import '../images/1.jpeg';
import '../images/2.jpeg';
import '../images/3.jpeg';
import '../images/4.jpeg';
import '../images/5.jpeg';
import '../images/6.jpeg';
import '../images/7.jpeg';
import '../images/8.jpeg';
import '../images/aa1.jpeg';

// importing favicon

import '../images/favicon.png';

// importing fonts

import '../fonts/Chillax_Complete/Fonts/WEB/css/Chillax.css';
import "../fonts/CabinetGrotesk_Complete/Fonts/WEB/css/cabinet-grotesk.css"

// importing files

import '../assets/demo-cv.pdf';

// document.getElementById('cv-link').addEventListener('click', function(event) {
//   event.preventDefault();
//   window.location.href = '../assets/demo-cv.pdf';
// });
