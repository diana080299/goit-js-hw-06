const input = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

input.addEventListener("input", onClickInput);

function onClickInput(event) {
  if (input.value.trim() !== "") {
    spanText.textContent = event.currentTarget.value;
  } else {
    spanText.textContent = "Anonymous";
  }
}
