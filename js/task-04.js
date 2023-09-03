let counterValue = 0;
const refs = {
  lowBtnClick: document.querySelector(`[data-action="decrement"`),
  highBtnClick: document.querySelector(`[data-action="increment"`),
  countBtnClick: document.querySelector("#value"),
};
// console.log(refs.countBtnClick);

refs.lowBtnClick.addEventListener("click", OnClickLowBtn);
refs.highBtnClick.addEventListener("click", OnClickHighBtn);

function OnClickLowBtn(event) {
  counterValue -= 1;
  refs.countBtnClick.textContent = counterValue;
}

function OnClickHighBtn(event) {
  counterValue += 1;
  refs.countBtnClick.textContent = counterValue;
}
