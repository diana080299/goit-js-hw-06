let counterValue = 0;
const refs = {
  lowBtnClick: document.querySelector(`[data-action="decrement"`),
  highBtnClick: document.querySelector(`[data-action="increment"`),
  countBtnClick: document.querySelector("#value"),
};

refs.lowBtnClick.addEventListener("click", onClickLowBtn);
refs.highBtnClick.addEventListener("click", onClickHighBtn);

function onClickLowBtn(event) {
  counterValue -= 1;
  refs.countBtnClick.textContent = counterValue;
}

function onClickHighBtn(event) {
  counterValue += 1;
  refs.countBtnClick.textContent = counterValue;
}
