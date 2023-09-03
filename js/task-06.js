const inputChange = document.querySelector("#validation-input");

inputChange.addEventListener("blur", changeValidColor);

function changeValidColor(event) {
  const inputLength = Number(inputChange.dataset.length);

  const inputValue = Number(inputChange.value.length);

  if (inputValue === inputLength) {
    inputChange.classList.add("valid");
    inputChange.classList.remove("invalid");
  } else {
    inputChange.classList.remove("valid");
    inputChange.classList.add("invalid");
  }
}
