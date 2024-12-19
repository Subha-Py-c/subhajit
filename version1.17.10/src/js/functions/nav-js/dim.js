const liElements = document.querySelectorAll('.li');
const sp = document.querySelectorAll('.sp');

liElements.forEach((li, index) => {
  li.addEventListener('mouseover', () => {
    sp[index].classList.add('active');
  });

  li.addEventListener('mouseout', () => {
    sp[index].classList.remove('active');
  });
});
