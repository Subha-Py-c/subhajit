const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX * 1.0 + 8}px`;
  cursor.style.top = `${e.pageY * 1.0 + 8}px`;
});

/*
const cursor = document.querySelector('.cursor');
const initialCursorPosition = { x: cursor.offsetLeft, y: cursor.offsetTop };
let initialMousePosition = { x: 0, y: 0 }; // Changed from const to let

document.addEventListener('mousemove', (e) => {
  const { pageX, pageY } = e;
  const dx = pageX - initialMousePosition.x;
  const dy = pageY - initialMousePosition.y;

  // Smoothly animate cursor movement
  cursor.style.transform = `translate(${dx}px, ${dy}px)`;

  // Adjust cursor size based on distance from initial mouse position
  const distance = Math.sqrt(dx * dx + dy * dy);
  const size = distance * 0.05; // Adjust the multiplier as needed
  cursor.style.width = `${size}px`;
  cursor.style.height = `${size}px`;

  // Change cursor color based on mouse position
  const color = `hsl(${(pageX / window.innerWidth) * 360}, 100%, 50%)`;
  cursor.style.backgroundColor = color;

  // Update initial mouse position for the next frame
  initialMousePosition = { x: pageX, y: pageY };
});

*/
