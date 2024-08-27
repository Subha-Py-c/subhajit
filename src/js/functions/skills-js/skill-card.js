const listElms = document.querySelectorAll(".list-elem");
const strechs = document.querySelectorAll(".strech");
const cardElms = document.querySelectorAll(".card-elem");

listElms.forEach((listElm, index) => {
  listElm.addEventListener("click", () => {
    listElms.forEach((elem) => {
      if (elem.classList.contains("clicked")) {
        elem.classList.remove("clicked");
      }
    });
    listElms[index].classList.add("clicked");

    strechs.forEach((elem) => {
      if (elem.classList.contains("active")) {
        elem.classList.remove("active");
      }
    });
    strechs[index].classList.add("active");

    cardElms.forEach((card) => {
      if (card.style.display != "none") {
        card.style.display = "none";
      }
    });
    cardElms[index].style.display = "block";
  });
});
