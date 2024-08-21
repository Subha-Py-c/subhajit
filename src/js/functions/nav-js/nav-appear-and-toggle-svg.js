document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const ul = document.getElementById("ul");
  const navMenu = document.querySelector(".nav-menu");
  const lis = document.querySelectorAll(".li");
  const sps = document.querySelectorAll(".sp");
  const closeIcon = document.querySelector(".close-icon");







  navMenu.addEventListener("click", function () {
    nav.classList.toggle("visible");
    ul.classList.toggle("visible");
    lis.forEach((li, index) => {
      li.classList.toggle("animate-li");
      li.style.animationDelay = `${index * 40}ms`;
    });
    sps.forEach((sp) => sp.classList.toggle("appear"));
    if (nav.classList.contains("visible")) {
      navMenu.style.display = "none";
      closeIcon.style.display = "flex";
    } else {
      closeIcon.style.display = "none";
      navMenu.style.display = "flex";
    }
    nav.style.height = "50vh";
  });








  closeIcon.addEventListener("click", function () {
    nav.classList.remove("visible");
    ul.classList.remove("visible");
    sps.forEach((sp) => sp.classList.remove("appear"));
    closeIcon.style.display = "none";
    navMenu.style.display = "flex";
    nav.style.height = "10vh";
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
