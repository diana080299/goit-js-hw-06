const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const creatEl = ingredients.map((ingredient) => {
  const elem = document.createElement("li");
  elem.textContent = ingredient;
  elem.classList.add("item");
  return elem;
});

list.append(...creatEl);
