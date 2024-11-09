// gsap
gsap.registerPlugin(ScrollTrigger);

/*
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".NONE",
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
    toggleActions: "none none none none",
  },
});
tl.to(".NONE", {
  y: 0,
  stagger: 0.08,
  duration: 0.15,
  ease: "power2.out",
  opacity: 1,
});
// 1300 load -> 1700 start
*/

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
    end: "bottom-=200 center",
    scrub: true,
    markers: false,
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
  "<",
);
// --------------------------------------
