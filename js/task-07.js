const inputSize = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

inputSize.addEventListener("input", OnInputChangeSize);

function OnInputChangeSize(event) {
  textSpan.style.fontSize = event.currentTarget.value + "px";
}
