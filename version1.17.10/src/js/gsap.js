// gsap
gsap.registerPlugin(ScrollTrigger);

// ------------------ academics --------------------
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#s-last",
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

tl2.to(".s3", {
  y: 0,
  delay: 0.0,
  stagger: 0.06,
  duration: 1,
  ease: "power3.out",
  opacity: 1,
});
// --------------------------------------

// --------------- contacts -----------------------
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".expC",
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

tl3.to(".s5", {
  y: 0,
  delay: 0.2,
  stagger: 0.06,
  duration: 1,
  ease: "power3.out",
  opacity: 1,
});
// --------------------------------------

// ------------------- skill -------------------
// "<" is used to start the animations at the same time
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#SK",
    start: "top-=200 center",
    end: "bottom-=400 center",
    scrub: true,
    markers: false,
    onLeave: () => {
      applySkillListEffect();
    },
  },
});

tl4.to(".card-container", {
  x: 0,
  rotateZ: 0,
  opacity: 1,
  ease: "power2.out",
});

tl4.to(
  "#skill-list",
  {
    x: 0,
    rotateZ: 0,
    opacity: 1,
    ease: "power2.out",
  },
  "<"
);

function applySkillListEffect() {
  const skillList = document.getElementById("skill-list");
  let coeff = 100;

  if (window.innerWidth > 1025 && !/Mobi|Android/i.test(navigator.userAgent)) {
    document.addEventListener("mousemove", (ev) => {
      skillList.style.transform = `translate3d(${ev.pageX / coeff}px, ${
        ev.pageY / coeff
      }px, 0)`;
    });
  }
}
