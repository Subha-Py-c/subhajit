
document.querySelectorAll('a').forEach(anchor=>{
  anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#') || !this.getAttribute('href').startsWith('http')) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const target = document.querySelector(targetId);
          if (!target)
              return;
          const targetRect = target.getBoundingClientRect();
          const targetOffset = targetRect.top + window.pageYOffset;
          const scrollDistance = Math.abs(targetOffset - window.scrollY);
          const scrollDuration = Math.min(1000, scrollDistance);
          scrollToTarget(targetOffset, scrollDuration)
      }
  })
}
);
function scrollToTarget(targetOffset, duration) {
  const startingY = window.pageYOffset;
  const diff = targetOffset - startingY;
  let start;
  window.requestAnimationFrame(function step(timestamp) {
      if (!start)
          start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);
      const easedT = easeInOutCubic(percent);
      window.scrollTo(0, startingY + diff * easedT);
      if (time < duration) {
          window.requestAnimationFrame(step)
      }
  })
}
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}