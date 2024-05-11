
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
