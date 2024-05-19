for (let i = 1; i <= 8; i++) {
  let element = document.getElementById('i_' + i);
  let childElement = document.querySelector('.p' + i);

  element.addEventListener('mouseenter', function() {
    if (childElement) {
      childElement.style.opacity = 1;
    }
  });

  element.addEventListener('mouseleave', function() {
    if (childElement) {
      childElement.style.opacity = 0;
    }
  });
}
