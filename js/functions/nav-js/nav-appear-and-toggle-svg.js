
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

