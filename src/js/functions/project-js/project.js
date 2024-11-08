const slider = document.querySelector(".slider");

function activate(e) {
  const items = document.querySelectorAll(".gitem");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);

const project_datas = document.querySelectorAll(".project_data");
const projects_all = document.querySelectorAll(".projects");

function removeClicked() {
  project_datas.forEach((project_data) => {
    if (project_data.classList.contains("clicked")) {
      project_data.classList.remove("clicked");
    }
  });
}

projects_all.forEach((projects, index) => {
  projects.addEventListener("click", () => {
    removeClicked();
    project_datas[index].classList.add("clicked");
  });
});

/* -------------
      cards animation
--------------------------------*/
const projectWrapper = document.querySelector(".projects-wrapper");
// const smallCards = [
//   document.querySelector("div.project.project2"),
//   document.querySelector("div.project.project3"),
//   document.querySelector("div.project.project6"),
// ];
// smallCards.forEach((card) => {
//   card.addEventListener("mouseover", () => {
//     card.classList.add("card-hovered");
//   });
//   card.addEventListener("mouseout", () => {
//     card.classList.remove("card-hovered");
//   });
// });

const smallCards = document.querySelectorAll("div.project");
let projectDatas = document.querySelectorAll(".project__data");
let projectImgs = document.querySelectorAll(".project__image");
const projectChildren = [...projectDatas, ...projectImgs];

let coeff = 100;
let coeff2 = 0.8;

let r0 = 0.8;
let r1 = 0.72;
let r2 = 0.98;
let r3 = 1.08;
let r4 = 0.8;

// overall shakyness
document.addEventListener("mousemove", (ev) => {
  smallCards.forEach((card, index) => {
    if (index === 0) {
      card.style.transform = `translate3d(${ev.pageX / coeff}px, ${ev.pageY / coeff}px, 0)`;
    } else if (index === 1) {
      card.style.transform = `translate3d(${ev.pageX / coeff}px, ${ev.pageY / coeff}px, 0)`;
    } else if (index === 2) {
      card.style.transform = `translate3d(${ev.pageX / coeff}px, ${ev.pageY / coeff}px, 0)`;
    } else if (index === 3) {
      card.style.transform = `translate3d(calc(${ev.pageX / coeff}px - 10.33rem), ${ev.pageY / coeff}px, 0)`;
    } else if (index === 4) {
      card.style.transform = `translate3d(${ev.pageX / coeff}px, ${ev.pageY / coeff}px, 0)`;
    } else {
      card.style.transform = `translate3d(${ev.pageX / coeff}px, ${ev.pageY / coeff}px, 0)`;
    }
  });
});

// children scroll
coeff2 = 0.05; // Lower the coefficient to reduce the movement
let initialPositions = new Map(); // To store each element’s initial position

function startParallax() {
  projectChildren.forEach((child) => {
    // Store the element's initial top offset within the viewport
    initialPositions.set(
      child,
      child.getBoundingClientRect().top + window.scrollY,
    );
  });

  window.addEventListener("scroll", parallaxScrollHandler);
}
startParallax();
function parallaxScrollHandler() {
  projectChildren.forEach((child) => {
    const initialTop = initialPositions.get(child);
    const offsetY = (window.scrollY - initialTop) * coeff2; // Relative scroll
    child.style.transform = `translate3d(0, ${offsetY + 80}px, 0)`;
  });
}

function stopParallax() {
  window.removeEventListener("scroll", parallaxScrollHandler);
}

// const callback = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       startParallax(); // Start parallax effect on entering view
//     } else {
//       stopParallax(); // Stop parallax effect on leaving view
//     }
//   });
// };

// const options = {
//   threshold: 0.1, // Start effect when a small portion is in view
// };

// const projectsObserver = new IntersectionObserver(callback, options);
// projectsObserver.observe(projectWrapper);
