document.addEventListener("DOMContentLoaded", () => {
  let imgShowDiv = document.querySelector(".imgShow");
  let imgToShow = document.getElementById("profileImg");

  imgShowDiv.addEventListener("mouseover", () => {
    imgToShow.style.transform = "scaleY(1) rotateZ(7deg)";
  });
  imgShowDiv.addEventListener("mouseout", () => {
    imgToShow.style.transform = "scaleY(0) rotateZ(7deg)";
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const d3 = document.getElementById("divv3");

//   if (window.innerWidth > 600) {
//     const onScroll = function () {
//       const scrolled = window.scrollY;

//       const minFontSize = 4; // px
//       const minLineHeight = 2; // px

//       let newFontSize = scrolled * 0.2;
//       let newLineHeight = scrolled * 0.1;

//       newFontSize = Math.max(newFontSize, minFontSize);
//       newLineHeight = Math.max(newLineHeight, minLineHeight);

//       const imgContainer = d3.querySelector(".img_container");
//       imgContainer.style.fontSize = `${newFontSize}px`;
//       imgContainer.style.lineHeight = `${newLineHeight}px`;
//     };

//     // Use throttling or debouncing to improve performance
//     document.addEventListener("scroll", throttle(onScroll, 30000));
//   }
// });

// // Throttle function to limit the number of times the scroll event handler is called
// function throttle(func, limit) {
//   let lastFunc;
//   let lastRan;
//   return function () {
//     const context = this;
//     const args = arguments;
//     if (!lastRan) {
//       func.apply(context, args);
//       lastRan = Date.now();
//     } else {
//       clearTimeout(lastFunc);
//       lastFunc = setTimeout(function () {
//         if (Date.now() - lastRan >= limit) {
//           func.apply(context, args);
//           lastRan = Date.now();
//         }
//       }, limit - (Date.now() - lastRan));
//     }
//   };
// }
