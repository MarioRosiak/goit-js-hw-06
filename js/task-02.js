const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const findUl = document.querySelector("#ingredients");
const ingredientsF = ingredients.forEach((ingredient) => {
  let ingredientsList = document.createElement("li");
  ingredientsList.classList.add("item");
  ingredientsList.textContent = ingredient;
  findUl.append(ingredientsList);
});
