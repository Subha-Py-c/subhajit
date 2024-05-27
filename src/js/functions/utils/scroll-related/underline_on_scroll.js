
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
    //   console.log(entry.target);
      entry.target.classList.add('active');
    }
    else{
    //   console.log('not intersecting');
      entry.target.classList.remove('active');
    }
  })
});

const headers = document.querySelectorAll('.headerSpan');
headers.forEach((header)=>observer.observe(header))