const lineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

const headers = document.querySelectorAll(".headerSpan");
headers.forEach((header) => lineObserver.observe(header));
