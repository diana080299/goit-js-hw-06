const input = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

input.addEventListener("input", OnClickInput);

function OnClickInput(event) {
  if (input !== "") {
    spanText.textContent = event.currentTarget.value;
  } else {
    spanText.textContent = "Anonymous";
  }
}
