let lastItemSelected = document.getElementById("selected-option");

function handleClick(event) {
  let clickedElement = event.target;
  lastItemSelected.classList.remove("selected");
  clickedElement.classList.add("selected");
  lastItemSelected = clickedElement;
}