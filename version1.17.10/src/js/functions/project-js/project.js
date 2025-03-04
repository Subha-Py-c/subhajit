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

const smallCards = document.querySelectorAll("div.project");
// let projectDatas = document.querySelectorAll(".project__data");
let projectImgs = document.querySelectorAll(".project__image img");
const projectChildren = [...projectImgs];

let coeff = 100;
let coeff2 = 0.8;

// overall shakyness
if (window.innerWidth > 1025 && !/Mobi|Android/i.test(navigator.userAgent)) {
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
}

// children scroll
coeff2 = 0.05; // Lower the coefficient to reduce the movement
let initialPositions = new Map(); // To store each element’s initial position

function parallaxScrollHandler() {
  projectChildren.forEach((child) => {
    const initialTop = initialPositions.get(child);
    const offsetY = (window.scrollY - initialTop) * coeff2; // Relative scroll
    child.style.transform = `translate3d(0, ${offsetY * 1.618}px, 0)`;
  });
}
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

function stopParallax() {
  window.removeEventListener("scroll", parallaxScrollHandler);
}

startParallax();

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startParallax();
    } else {
      stopParallax();
    }
  });
};

const options = {
  threshold: 0.1, // Start effect when a small portion is in view
};

const projectsObserver = new IntersectionObserver(callback, options);
projectsObserver.observe(projectWrapper);
