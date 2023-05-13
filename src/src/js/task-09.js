// Напиши скрипт, 
// який змінює кольори фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color 
// і виводить значення кольору в span.color.
// Для генерування випадкового кольору 
// використовуй функцію getRandomHexColor.

let colorName = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

// console.log(colorName);
// console.log(changeColorButton);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorFunc = () => {
  // // event.currentTarget();
  // // console.log(getRandomHexColor());
  // console.log(colorName.textContent);

  document.body.style.background = getRandomHexColor();
  return colorName.textContent = getRandomHexColor();
}

changeColorButton.addEventListener('click', changeColorFunc); 




// console.log(colorName.textContent);