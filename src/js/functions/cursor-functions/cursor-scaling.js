const elements = {
  gallery: document.getElementById("gallery"),
  hello: document.getElementById("hello"),
  cardContainer: document.querySelector(".card-container"),
  skill: document.getElementById("skill"),
  pro: document.getElementById("project-heading"),
  con: document.getElementById("contact-heading"),
  acd: document.getElementById("academic__header"),
  hand: document.querySelectorAll(".ta-ta"),
};

const cursor = document.querySelector(".cursor");
const initial_scale = 0.15;

const scaleTransform = (element, scale) => {
  element.style.transform = `scale(${scale}) translateZ(0)`;
};

const toggleInvertFilter = (element) => {
  element.style.filter =
    element.style.filter === "invert(100%)" ? "invert(0%)" : "invert(100%)";
};

["gallery", "hello", "cardContainer", "skill", "pro", "con", "acd"].forEach(
  (id) => {
    const element = elements[id];
    if (element) {
      element.addEventListener("mouseover", () => scaleTransform(cursor, 0.9));
      element.addEventListener("mouseout", () =>
        scaleTransform(cursor, initial_scale)
      );
    }
  }
);

elements.hand.forEach((element) => {
  element.addEventListener("mouseover", () => scaleTransform(cursor, 0.4));
  element.addEventListener("mouseout", () =>
    scaleTransform(cursor, initial_scale)
  );
});
