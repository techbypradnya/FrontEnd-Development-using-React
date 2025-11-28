// Simple version - index.js
const colors = ["green", "red", "blue", "yellow", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomNumber];

  document.body.style.backgroundColor = selectedColor;
  color.textContent = selectedColor; // Display color name/code
});
