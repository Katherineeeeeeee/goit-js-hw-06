const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listMap = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");

  return li;
});

list.append(...listMap);

// function render(item, arr) {
//   arr.forEach((el) => {
//     const li = document.createElement('li');
//     li.textContent = el;

//     li.classList.add("item");

//     item.append(li);
//   });
// }

// render(list, ingredients);
