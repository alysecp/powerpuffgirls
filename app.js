// Logic/Middleware layer
function randomBrightColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 90%, 60%)`;
}

function setRandomColor() {
  document.body.style.backgroundColor = randomBrightColor();
}

setRandomColor();

document.getElementById("change-btn").addEventListener("click", setRandomColor);
