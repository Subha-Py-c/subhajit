document.addEventListener("DOMContentLoaded", () => {
  const question = document.querySelector(".question");
  const box = document.querySelector(".box");
  const backBtn = document.querySelector(".back-btn");

  question.addEventListener("click", () => {
    question.style.display = "none";
    box.style.display = "flex";
  });
  backBtn.addEventListener("click", () => {
    question.style.display = "block";
    box.style.display = "none";
  });
});
