const elements = {
  invertButton: document.getElementById('invert-button'),
  hello: document.getElementById('hello'),
  h: document.querySelector('.letter'),
  skill: document.getElementById('skill'),
  pro: document.getElementById('project-heading'),
  con: document.getElementById('contact-heading'),
  cardContainer: document.querySelector('.card-container'),
  hand: document.querySelectorAll('.ta-ta'),
  gallery: document.getElementById('gallery'),
};

const cursor = document.querySelector('.cursor'); 

const scaleTransform = (element, scale) => {
  element.style.transform = `scale(${scale})`;
};

const toggleInvertFilter = (element) => {
  element.style.filter = element.style.filter === 'invert(100%)'? 'invert(0%)' : 'invert(100%)';
};

['gallery', 'hello', 'cardContainer', 'invertButton', 'skill', 'pro', 'con'].forEach((id) => {
  const element = elements[id];
  if (element) {
    element.addEventListener('mouseover', () => scaleTransform(cursor, 3.7));
    element.addEventListener('mouseout', () => scaleTransform(cursor, 1));
  }
});

elements.hand.forEach((element) => {
  element.addEventListener('mouseover', () => scaleTransform(cursor, 2));
  element.addEventListener('mouseout', () => scaleTransform(cursor, 1));
});

elements.invertButton.addEventListener('mouseover', () => {
  scaleTransform(cursor, 2.4);
  toggleInvertFilter(elements.invertButton);
});
elements.invertButton.addEventListener('mouseout', () => {
  scaleTransform(cursor, 1);
  toggleInvertFilter(elements.invertButton);
});
