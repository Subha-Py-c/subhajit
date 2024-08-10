
const d3 = document.getElementById('divv3');
const hello = document.getElementById('hello');

document.addEventListener('scroll', function(e){
  const target = d3;
  var scrolled = window.scrollY;
  var rate = scrolled * (0.22);
  target.style.transform = 'translate3d(' + rate + 'px, 0px, 0px)';
});
