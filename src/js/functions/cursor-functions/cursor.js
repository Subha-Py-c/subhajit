const cursor = document.querySelector(".cursor");
const elements = {
  gallery: document.getElementById("gallery"),
  hello: document.getElementById("hello"),
  cardContainer: document.querySelector(".card-container"),
  skill: document.getElementById("skill"),
  projectHeading: document.getElementById("project-heading"),
  contactHeading: document.getElementById("contact-heading"),
  cv: document.getElementById("cv"),
  acadHeader: document.getElementById("academic__header"),
};

/* ----------
  parameters
------------- */

let fixing = 45;
let initial_scale = 0.12;
let expanded = 1;
let mid_expanded = 0.35;
let scale = initial_scale;

/* ----------
  transforming
------------- */

// Move the cursor with mouse movement
document.addEventListener("mousemove", (e) => {
  cursor.style.top = 0;
  cursor.style.transform = `translate(${e.clientX - fixing}px, ${
    e.clientY - fixing
  }px) scale(${scale})`;
});

// Loop through the elements and add the event listeners
[
  "gallery",
  "hello",
  "cardContainer",
  "skill",
  "projectHeading",
  "contactHeading",
  "cv",
  "acadHeader",
].forEach((id) => {
  const element = elements[id];
  if (element) {
    element.addEventListener("mouseover", (e) => {
      scale = expanded;
      cursor.style.transform = `translate(${e.clientX - fixing}px, ${
        e.clientY - fixing
      }px) scale(${scale})`;
    });
    element.addEventListener("mouseout", (e) => {
      scale = initial_scale;
      cursor.style.transform = `translate(${e.clientX - fixing}px, ${
        e.clientY - fixing
      }px) scale(${scale})`;
    });
  }
});
