const inputSize = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

inputSize.addEventListener("input", onInputChangeSize);

function onInputChangeSize(event) {
  textSpan.style.fontSize = event.currentTarget.value + "px";
}
