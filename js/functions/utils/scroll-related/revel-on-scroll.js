
document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const viewportHeight = window.innerHeight;
  const revealThreshold = viewportHeight * 0.3;
  sections.forEach(section=>{
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= revealThreshold) {
          section.classList.add('reveal')
      } else {
          section.classList.remove('reveal')
      }
  }
  )
});