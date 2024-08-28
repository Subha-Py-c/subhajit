const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX * 1.0 + 0}px`;
  cursor.style.top = `${e.pageY * 1.0 + 0}px`;
});
