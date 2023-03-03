let value = document.querySelector("#value");
let counterValue = parseInt(document.querySelector("#value").textContent);
console.log(typeof counterValue);

const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');

const decrement = () => {
  counterValue -= 1;
  value.innerHTML = `<span id="value">${counterValue}</span>`;
};
const increment = () => {
  counterValue += 1;
  value.innerHTML = `<span id="value">${counterValue}</span>`;
};

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
