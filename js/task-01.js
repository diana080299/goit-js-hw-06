const getLi = document.querySelectorAll("li.item");
const countLi = getLi.length;

getLi.forEach((element) => {
  const getTitle = element.querySelector("h2").textContent;
  const getEl = element.querySelectorAll("li");
  const countEl = getEl.length;
  console.log(`Category: ${getTitle}`);
  console.log(`Elements: ${countEl}`);
});
