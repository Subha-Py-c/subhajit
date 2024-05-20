// Get all .li elements
const liElements = document.querySelectorAll('.li');

liElements.forEach(li => {
  li.addEventListener('mouseover', () => {
    liElements.forEach(otherLi => {
      if (otherLi !== li) {
        otherLi.classList.add('dimmed');
      }
    });
  });

  li.addEventListener('mouseout', () => {
    liElements.forEach(otherLi => {
      otherLi.classList.remove('dimmed');
    });
  });
});