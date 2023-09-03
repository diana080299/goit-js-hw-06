function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  controlDiv: document.querySelector("#controls"),
  inputNumber: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  divBox: document.querySelector("#boxes"),
};
refs.divBox.style.display = "flex";
refs.divBox.style.flexWrap = "wrap";
refs.divBox.style.alignItems = "center";
refs.divBox.style.marginTop = "30px";
refs.inputNumber.addEventListener("click", handleInputValue);
refs.btnCreate.addEventListener("click", () => {
  createBoxes(Number(refs.inputNumber.value));
});
refs.btnDestroy.addEventListener("click", destroyBoxes);

let inputValue = 0;
function handleInputValue(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}

function createBoxes(amount) {
  let arrBox = [];
  let beggingSize = 30;
  for (let i = 0; i < amount; i += 1) {
    beggingSize += 10;
    const newEl = document.createElement("div");
    newEl.classList = "newBox";
    newEl.style.height = `${beggingSize}`;
    newEl.style.width = `${beggingSize}`;
    newEl.style.marginRight = "30px";
    newEl.style.marginBottom = "30px";
    newEl.style.backgroundColor = getRandomHexColor();
    arrBox.push(newEl);
  }
  return refs.divBox.append(...arrBox);
}

function destroyBoxes() {
  refs.inputNumber.value = "";
  return (refs.divBox.innerHTML = "");
}
