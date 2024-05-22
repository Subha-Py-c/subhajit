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
const sp = document.querySelectorAll('.sp')

liElements.forEach(li => {
  li.addEventListener('mouseover', () => {
    sp.forEach(span =>{
      span.classList.add('animated-underline-proper');
    })
  });

  li.addEventListener('mouseout', () => {
    sp.forEach(span=>{
      span.classList.remove('animated-underline-proper');
    })
  });
});
