// const liElements = document.querySelectorAll('.li');

// liElements.forEach(li => {
//   li.addEventListener('mouseover', () => {
//     liElements.forEach(otherLi => {
//       if (otherLi !== li) {
//         otherLi.classList.add('dimmed');
//       }
//     });
//   });

//   li.addEventListener('mouseout', () => {
//     liElements.forEach(otherLi => {
//       otherLi.classList.remove('dimmed');
//     });
//   });
// });
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
