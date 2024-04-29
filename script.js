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


// const skillWidth = skill.offsetWidth;
// console.log(skillWidth);
skill.addEventListener('mouseover', function(){
  cursor.style.transform = 'scale(3)';
  // cursor.style.transition = 'width 0.3s, height 0.3s, border-radius 0.3s'; // Add transition
  // cursor.style.width = skillWidth + 'px';
  // cursor.style.height = '3em';
  // cursor.style.borderRadius = '5px';
});

skill.addEventListener('mouseout', function(){
  // cursor.style.transition = 'width 0.3s, height 0.3s, border-radius 0.3s'; // Add transition
  cursor.style.transform = 'scale(1)';
  // cursor.style.width ='20px';
  // cursor.style.height = '20px';
  // cursor.style.borderRadius = '50%';
});

// const li_true = document.querySelector('.li-true');
// const naav = document.getElementById('n');
// const li_width = li_true.offsetWidth / 2;
// naav.addEventListener('mouseover', function(){
//   cursor.style.transition = 'width 0.3s, height 0.3s, border-radius 0.3s'; 
//   cursor.style.width = li_width + 'px';
//   cursor.style.height = '3em';
//   cursor.style.borderRadius = '5px';
// });

// naav.addEventListener('mouseout', function(){
//   cursor.style.transition = 'width 0.3s, height 0.3s, border-radius 0.3s'; 
//   cursor.style.width ='20px';
//   cursor.style.height = '20px';
//   cursor.style.borderRadius = '50%';
// });


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





// const span = document.querySelector('.strech');
// const inv = document.querySelector('.inverse');

// inv.addEventListener('mouseover', function(){
//   span.style.transition = 'fontSize 0.4s';
//   span.style.fontSize = '30px';
// });

// inv.addEventListener('mouseout', function(){
//   span.style.transition = 'fontSize 0.4s';
//   span.style.fontSize = '0px';
// });









// const nav = document.getElementById('nav');
// const navIcon = document.getElementById('nav-icon');

// // Toggle the visibility of the nav when the SVG icon is clicked
// navIcon.addEventListener('click', () => {
//     nav.classList.toggle('nav-hidden');
// });








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

document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
     // Check if the href is an external link or a link to a section within the same page
     if (this.getAttribute('href').startsWith('#') || !this.getAttribute('href').startsWith('http')) {
       e.preventDefault(); // Prevent the default jump to the target
 
       const targetId = this.getAttribute('href');
       const target = document.querySelector(targetId);
       if (!target) return; // If the target doesn't exist, exit
 
       const targetRect = target.getBoundingClientRect(); // Get the target's position relative to the viewport IMP
       const targetOffset = targetRect.top + window.pageYOffset; // Calculate the target's offset from the top of the document
 
       const scrollDistance = Math.abs(targetOffset - window.scrollY);
       const scrollDuration = Math.min(1000, scrollDistance); // Adjust duration as needed
 
       // Smoothly scroll to the target with the corrected offset
       scrollToTarget(targetOffset, scrollDuration);
     }
  });
 });
 
function scrollToTarget(targetOffset, duration) {
  const startingY = window.pageYOffset;
  const diff = targetOffset - startingY;
  console.log(startingY, diff)
  let start;
 
  // Use requestAnimationFrame for smoother animation
  window.requestAnimationFrame(function step(timestamp) {
     if (!start) start = timestamp;
     const time = timestamp - start;
     const percent = Math.min(time / duration, 1);
 
     // Easing function: You can adjust this for different easing effects
     const easedT = easeInOutCubic(percent); // Use easeInOutCubic for smoother scrolling
 
     window.scrollTo(0, startingY + diff * easedT);
 
     if (time < duration) {
       window.requestAnimationFrame(step);
     }
  });
}
 
// Easing function for smooth transition
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  // return t * t * t * (t * (t * 6 - 15) + 10);
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
 


//  they will be displayed
 const Default = document.querySelector('.default');
 const python = document.querySelector('.python');
 const ai_tools = document.querySelector('.ai-tools');
 const html_css = document.querySelector('.html-css');
 const ui_ux = document.querySelector('.ui-ux');
 const js = document.querySelector('.js');
//  const react = document.querySelector('.react');
 const c_cpp = document.querySelector('.c-cpp');
 const git = document.querySelector('.git');
 const other = document.querySelector('.others');

//  const card = document.querySelector('.card');

// when these are hovered
 const p = document.getElementById('python');
 const a = document.getElementById('ai');
 const htm = document.getElementById('html-css');
 const u = document.getElementById('ui-ux');
 const j = document.getElementById('js');
//  const r = document.getElementById('react');
 const c = document.getElementById('c');
 const cpp = document.getElementById('cpp');
 const g = document.getElementById('git');
 const gimp = document.getElementById('gimp');
 const script = document.getElementById('script');


 p.addEventListener('mouseover', function(){
   Default.style.display = 'none';
   python.style.display = 'block';
 });

 a.addEventListener('mouseover', function(){
   Default.style.display = 'none';
   ai_tools.style.display = 'block';
 });

 htm.addEventListener('mouseover', function(){
   Default.style.display = 'none';
   html_css.style.display = 'block';
 });

 u.addEventListener('mouseover', function(){
   Default.style.display = 'none';
   ui_ux.style.display = 'block';
 });

 j.addEventListener('mouseover', function(){
   Default.style.display = 'none';
   js.style.display = 'block';
 });

 c.addEventListener('mouseover', function(){
   Default.style.display = 'none';
   c_cpp.style.display = 'block';
 });

 cpp.addEventListener('mouseover', function(){
   Default.style.display = 'none';
   c_cpp.style.display = 'block';
 });

 g.addEventListener('mouseover', function(){
   Default.style.display = 'none';
   git.style.display = 'block';
 });

 gimp.addEventListener('mouseover', function(){
   Default.style.display = 'none';
   other.style.display = 'block';
 });

 script.addEventListener('mouseover', function(){
   Default.style.display = 'none';
   other.style.display = 'block';
 });




 p.addEventListener('mouseout', function(){
   Default.style.display = 'block';
   python.style.display = 'none';
  //  python.classList.add('invisible');
 });

 a.addEventListener('mouseout', function(){
   Default.style.display = 'block';
   ai_tools.style.display = 'none';
 });

 htm.addEventListener('mouseout', function(){
   Default.style.display = 'block';
   html_css.style.display = 'none';
 });

 u.addEventListener('mouseout', function(){
   Default.style.display = 'block';
   ui_ux.style.display = 'none';
 });

 j.addEventListener('mouseout', function(){
   Default.style.display = 'block';
   js.style.display = 'none';
 });

 c.addEventListener('mouseout', function(){
   Default.style.display = 'block';
   c_cpp.style.display = 'none';
 });

 cpp.addEventListener('mouseout', function(){
   Default.style.display = 'block';
   c_cpp.style.display = 'none';
 });

 g.addEventListener('mouseout', function(){
   Default.style.display = 'block';
   git.style.display = 'none';
 });

 gimp.addEventListener('mouseout', function(){
   Default.style.display = 'block';
   other.style.display = 'none';
 });

 script.addEventListener('mouseout', function(){
   Default.style.display = 'block';
   other.style.display = 'none';
 });


const nav = document.getElementById('nav');
const svg = document.getElementById('svg');
const ul = document.getElementById('ul');
const li = document.querySelector('.li');
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const l4 = document.getElementById('l4');
const s1 = document.getElementById('s1');
const s1d1 = document.getElementById('s1d1');
// const navSpan = document.querySelector('span');
const sp1 = document.getElementById('sp1');
const sp2 = document.getElementById('sp2');
const sp3 = document.getElementById('sp3');
const sp4 = document.getElementById('sp4');

svg.addEventListener('click', function() {
  s1.classList.toggle('invisible');
  nav.classList.toggle('visible');
  ul.classList.toggle('visible');

  l1.classList.toggle('animate-li');
  l1.style.animationDelay = '0ms';
  l2.classList.toggle('animate-li');
  l2.style.animationDelay = '200ms';
  l3.classList.toggle('animate-li');
  l3.style.animationDelay = '400ms';
  l4.classList.toggle('animate-li');
  l4.style.animationDelay = '600ms';

  if(nav.classList.contains('visible')){
    // svg.innerHTML = 'X';
    // navSpan.classList.toggle('appear');
    sp1.classList.add('appear');
    sp2.classList.add('appear');
    sp3.classList.add('appear');
    sp4.classList.add('appear');
  }else{
    // svg.innerHTML = 'NAV';
    sp1.classList.remove('appear');
    sp2.classList.remove('appear');
    sp3.classList.remove('appear');
    sp4.classList.remove('appear');
  }
});
