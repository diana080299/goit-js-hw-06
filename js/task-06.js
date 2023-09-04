const inputChange = document.querySelector("#validation-input");

inputChange.addEventListener("blur", changeValidColor);

function changeValidColor(event) {
  const inputLength = Number(inputChange.dataset.length);

  const inputValue = inputChange.value.length;

  if (inputValue === inputLength) {
    handleInput("valid", "invalid");
  } else {
    handleInput("invalid", "valid");
  }
}

function handleInput(a, b) {
  inputChange.classList.add(a);
  inputChange.classList.remove(b);
}
