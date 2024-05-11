const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show')
      } else {
          entry.target.classList.remove('show')
      }
  }
  )
}
);
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e)=>{
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px'
}
);

const invert_button = document.getElementById('invert-button');
const hello = document.getElementById('hello');
const h = document.querySelector('.letter')
const skill = document.getElementById('skill')
const pro = document.getElementById('pro')
const con = document.getElementById('con')
const cardCaontainer = document.querySelector('.card-container')
const hand = document.querySelectorAll('.ta-ta');
const gallery = document.getElementById('gallery');


gallery.addEventListener('mouseover', function() {
  cursor.style.transform = 'scale(4)'
});
gallery.addEventListener('mouseout', function() {
  cursor.style.transform = 'scale(1)'
});

hello.addEventListener('mouseover', function() {
  cursor.style.transform = 'scale(3)'
});
hello.addEventListener('mouseout', function() {
  cursor.style.transform = 'scale(1)'
});
hand.forEach(function(element) {
  element.addEventListener('mouseover', function() {
      cursor.style.transform = 'scale(2)';
  });

  element.addEventListener('mouseout', function() {
      cursor.style.transform = 'scale(1)';
  });
});
cardCaontainer.addEventListener('mouseover', function() {
  cursor.style.transform = 'scale(4.5)'
});
cardCaontainer.addEventListener('mouseout', function() {
  cursor.style.transform = 'scale(1)'
});
invert_button.addEventListener('mouseover', function() {
  cursor.style.transform = 'scale(2.4)';
  invert_button.style.filter = 'invert(100%)'
});
invert_button.addEventListener('mouseout', function() {
  cursor.style.transform = 'scale(1)';
  invert_button.style.filter = 'invert(0%)'
});
skill.addEventListener('mouseover', function() {
  cursor.style.transform = 'scale(3)'
});
skill.addEventListener('mouseout', function() {
  cursor.style.transform = 'scale(1)'
});
pro.addEventListener('mouseover', function() {
  cursor.style.transform = 'scale(3)'
});
pro.addEventListener('mouseout', function() {
  cursor.style.transform = 'scale(1)'
});
con.addEventListener('mouseover', function() {
  cursor.style.transform = 'scale(3)'
});
con.addEventListener('mouseout', function() {
  cursor.style.transform = 'scale(1)'
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


document.querySelectorAll('a').forEach(anchor=>{
  anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#') || !this.getAttribute('href').startsWith('http')) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const target = document.querySelector(targetId);
          if (!target)
              return;
          const targetRect = target.getBoundingClientRect();
          const targetOffset = targetRect.top + window.pageYOffset;
          const scrollDistance = Math.abs(targetOffset - window.scrollY);
          const scrollDuration = Math.min(1000, scrollDistance);
          scrollToTarget(targetOffset, scrollDuration)
      }
  })
}
);
function scrollToTarget(targetOffset, duration) {
  const startingY = window.pageYOffset;
  const diff = targetOffset - startingY;
  let start;
  window.requestAnimationFrame(function step(timestamp) {
      if (!start)
          start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);
      const easedT = easeInOutCubic(percent);
      window.scrollTo(0, startingY + diff * easedT);
      if (time < duration) {
          window.requestAnimationFrame(step)
      }
  })
}
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}
document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const viewportHeight = window.innerHeight;
  const revealThreshold = viewportHeight * 0.3;
  sections.forEach(section=>{
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= revealThreshold) {
          section.classList.add('reveal')
      } else {
          section.classList.remove('reveal')
      }
  }
  )
});

const Default = document.querySelector('.default');
const python = document.querySelector('.python');
const ai_tools = document.querySelector('.ai-tools');
const html_css = document.querySelector('.html-css');
const ui_ux = document.querySelector('.ui-ux');
const js = document.querySelector('.js');
const c_cpp = document.querySelector('.c-cpp');
const git = document.querySelector('.git');
const other = document.querySelector('.others');
const p = document.getElementById('python');
const a = document.getElementById('ai');
const htm = document.getElementById('html-css');
const u = document.getElementById('ui-ux');
const j = document.getElementById('js');
const c = document.getElementById('c');
const cpp = document.getElementById('cpp');
const g = document.getElementById('git');
const gimp = document.getElementById('gimp');
const script = document.getElementById('script');
p.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  python.style.display = 'block'
});
a.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  ai_tools.style.display = 'block'
});
htm.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  html_css.style.display = 'block'
});
u.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  ui_ux.style.display = 'block'
});
j.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  js.style.display = 'block'
});
c.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  c_cpp.style.display = 'block'
});
cpp.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  c_cpp.style.display = 'block'
});
g.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  git.style.display = 'block'
});
gimp.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  other.style.display = 'block'
});
script.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  other.style.display = 'block'
});
p.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  python.style.display = 'none'
});
a.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  ai_tools.style.display = 'none'
});
htm.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  html_css.style.display = 'none'
});
u.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  ui_ux.style.display = 'none'
});
j.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  js.style.display = 'none'
});
c.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  c_cpp.style.display = 'none'
});
cpp.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  c_cpp.style.display = 'none'
});
g.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  git.style.display = 'none'
});
gimp.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  other.style.display = 'none'
});
script.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  other.style.display = 'none'
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
const sp1 = document.getElementById('sp1');
const sp2 = document.getElementById('sp2');
const sp3 = document.getElementById('sp3');
const sp4 = document.getElementById('sp4');

const closeIcon = document.querySelector('.close-icon');
const navMenu = document.querySelector('.nav-menu');

svg.addEventListener('click', function() {
  nav.classList.toggle('visible');
  ul.classList.toggle('visible');
  l1.classList.toggle('animate-li');
  l1.style.animationDelay = '0ms';
  l2.classList.toggle('animate-li');
  l2.style.animationDelay = '100ms';
  l3.classList.toggle('animate-li');
  l3.style.animationDelay = '200ms';
  l4.classList.toggle('animate-li');
  l4.style.animationDelay = '300ms';
  if (nav.classList.contains('visible')) {
    sp1.classList.add('appear');
    sp2.classList.add('appear');
    sp3.classList.add('appear');
    sp4.classList.add('appear');
    navMenu.style.display = 'none';
    closeIcon.style.display = 'flex';
  } else {
    sp1.classList.remove('appear');
    sp2.classList.remove('appear');
    sp3.classList.remove('appear');
    sp4.classList.remove('appear');
    closeIcon.style.display = 'none';
    navMenu.style.display = 'flex';
  }
});

closeIcon.addEventListener('click', function() {
  nav.classList.remove('visible');
  ul.classList.remove('visible');
  sp1.classList.remove('appear');
  sp2.classList.remove('appear');
  sp3.classList.remove('appear');
  sp4.classList.remove('appear');
  closeIcon.style.display = 'none';
  navMenu.style.display = 'flex';
});




const eBox = document.getElementById('email-box');

eBox.addEventListener('mouseover', function() {
  cursor.style.display = 'none';
});
eBox.addEventListener('mouseout', function() {
  cursor.style.display = 'block';
});

