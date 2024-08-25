const cursor = document.querySelector(".cursor");

const eBox = document.getElementById("email-box");
// const slider = document.querySelector(".slider");

let items = [eBox];

items.forEach((item) => {
  item.addEventListener("mouseover", function () {
    cursor.style.display = "none";
  });

  item.addEventListener("mouseout", function () {
    cursor.style.display = "block";
  });
});
