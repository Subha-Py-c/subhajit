
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
