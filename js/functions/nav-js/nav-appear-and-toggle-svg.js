const nav = document.getElementById('nav');
const svg_nav_menu = document.getElementById('svg-nav-menu');
const ul = document.getElementById('ul');
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const l4 = document.getElementById('l4');
const sps = document.querySelectorAll('.sp');
const closeIcon = document.querySelector('.close-icon');
const navMenu = document.querySelector('.nav-menu');


svg_nav_menu.addEventListener('click', function() {
  nav.classList.toggle('visible');
  ul.classList.toggle('visible');
  [l1, l2, l3, l4].forEach((li, index) => {
    li.classList.toggle('animate-li');
    li.style.animationDelay = `${index * 100}ms`;
  });
  sps.forEach(sp => sp.classList.toggle('appear'));
  if (nav.classList.contains('visible')) {
    navMenu.style.display = 'none';
    closeIcon.style.display = 'flex';
  } else {
    closeIcon.style.display = 'none';
    navMenu.style.display = 'flex';
  }
});

closeIcon.addEventListener('click', function() {
  nav.classList.remove('visible');
  ul.classList.remove('visible');
  sps.forEach(sp => sp.classList.remove('appear'));
  closeIcon.style.display = 'none';
  navMenu.style.display = 'flex';
});
