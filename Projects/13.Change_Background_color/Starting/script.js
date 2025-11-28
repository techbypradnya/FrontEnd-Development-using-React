// Get the input field
const nameInput = document.getElementById("nameInput");

// When input gets focus
nameInput.addEventListener("focus", function () {
  nameInput.style.backgroundColor = "rgba(236, 24, 24, 1)"; // light cyan color
});

// When input loses focus
nameInput.addEventListener("blur", function () {
  nameInput.style.backgroundColor = ""; // reset to default
});
