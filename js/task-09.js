let colorName = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorFunc = () => {
  document.body.style.background = getRandomHexColor();
  colorName.textContent =  document.body.style.background;
}

changeColorButton.addEventListener('click', changeColorFunc); 

