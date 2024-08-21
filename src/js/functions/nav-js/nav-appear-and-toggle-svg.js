document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const navMenu = document.querySelector(".nav-menu");
  const lis = document.querySelectorAll(".li");
  const closeIcon = document.querySelector(".close-icon");


  navMenu.addEventListener("click", function () {
    lis.forEach((li, index) => {
      li.classList.add("active");
    });

    navMenu.style.display = "none";
    closeIcon.style.display = "flex";
  });


  closeIcon.addEventListener("click", function () {
    lis.forEach((li, index) => {
      li.classList.remove("active");
    });
    
    navMenu.style.display = "flex";
    closeIcon.style.display = "none";
  });


  var w = 5000;
  if (window.innerWidth < w) {
    const lis = document.querySelectorAll(".li");
    lis.forEach((li) => {
      li.addEventListener("click", () => {
        const a_tag = li.querySelector("a");
        if (a_tag) {
          a_tag.click();
        }
      });
    });
  }
});
