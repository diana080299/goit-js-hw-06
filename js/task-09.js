function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  spanColor: document.querySelector(".color"),
  btnChangeColor: document.querySelector(".change-color"),
  body: document.querySelector(".body"),
};

const randomColor = (arr) => {
  refs.spanColor.textContent = refs.body.style.backgroundColor =
    getRandomHexColor();
};
refs.btnChangeColor.addEventListener("click", randomColor);
