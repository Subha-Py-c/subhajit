
const d3 = document.getElementById('divv3');
const hello = document.getElementById('hello');

document.addEventListener('scroll', function(e){
  const target = d3;
  var scrolled = window.scrollY;
  var rate = scrolled * (-0.22);
  target.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)';

  // var rate2 = scrolled * (-0.22);
  // const targets = document.querySelectorAll('.scroll');
  // targets.forEach((el) => {
  //   el.style.transform = 'translate3d(0px, ' + rate2 + 'px, 0px)';
  // })
});
