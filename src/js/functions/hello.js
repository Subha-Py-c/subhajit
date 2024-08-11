document.addEventListener('DOMContentLoaded', ()=>{
  const d3 = document.getElementById('divv3');
  const hello = document.getElementById('hello');

  document.addEventListener('scroll', function(e){
    const target = d3;
    var scrolled = window.scrollY;
    var rate = scrolled * (0.22);

    target.style.transform = 'translate3d(' + rate + 'px, 0px, 0px)'; // x
    // target.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)'; // y

    target.style.opacity = 1 - scrolled * (0.0026);
    // why is it working ? the image should instantly appear if i scroll in opposite direction cuz its 1 - n*S ;
    // so 1 - 0.1 like that and if scroll opposite , its 1 + 0.1 ETC;  cuz i am cosidering 1 not the current opacity.
  });

});



// function wrapWords(target) {
//   const elements = document.querySelectorAll(target);

//   elements.forEach((element) => {
//       if (!element) return;

//       // Get the text content and split it into words
//       const words = element.textContent.split(/\s+/).filter(Boolean); // Filter out empty strings

//       // Clear the element's content
//       element.innerHTML = '';

//       // Rebuild the element's content with each word wrapped in a div with the specified attributes
//       words.forEach((word, index) => {
//           const div = document.createElement('div');
//           div.setAttribute('data-aos', 'zoom-out-up');
//           div.setAttribute('data-aos-duration', '300');
//           div.setAttribute('data-aos-delay', `${0 + 200 * index}`);
//           div.className = ''; // You can add a class name here if needed
//           div.style.display = 'inline';
//           div.style.position = 'relative';
//           div.textContent = word;

//           element.appendChild(div);

//           // Add a space after each word except the last one
//           if (index < words.length - 1) {
//               element.appendChild(document.createTextNode(' '));
//           }
//       });
//   });
// }

// function animateWords(target) {
//   const elements = document.querySelectorAll(target);
//   const duration = 8000;
//   const stagger = 2000;

//   elements.forEach((element, index) => {
//       const words = element.querySelectorAll('div');

//       words.forEach((word, i) => {
//           word.style.transform = 'translateY(50%) rotate(10deg)';
//           word.style.opacity = '0';

//           setTimeout(() => {
//               const startTime = performance.now();

//               function animate() {
//                   const currentTime = performance.now();
//                   const elapsedTime = currentTime - startTime;

//                   if (elapsedTime < duration) {
//                       const progress = elapsedTime / duration;

//                       word.style.transform = `translateY(${(1 - progress) * 50}%) rotate(${10 * (1 - progress)}deg)`;
//                       word.style.opacity = progress;

//                       requestAnimationFrame(animate);
//                   } else {
//                       word.style.transform = 'translateY(0%) rotate(0deg)';
//                       word.style.opacity = '1';
//                   }
//               }

//               requestAnimationFrame(animate);
//           }, i * stagger);
//       });
//   });
// }

// setTimeout(wrapWords, 1000, ".i-txt div");
// wrapWords(".i-txt");
// //animateWords(".i-txt div");
