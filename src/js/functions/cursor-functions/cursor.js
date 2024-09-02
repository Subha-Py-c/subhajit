const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${Math.round(e.pageX) - 45}px`;
  cursor.style.top = `${Math.round(e.pageY) - 45}px`;
});
