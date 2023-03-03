function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const chengerColor = document.querySelector(".change-color");
const backgroundElement = document.querySelector("body");
const colorHex = document.querySelector("span.color");

chengerColor.addEventListener("click", () => {
  const randomHexColor = getRandomHexColor();
  backgroundElement.style.backgroundColor = randomHexColor;
  colorHex.innerHTML = randomHexColor;
});