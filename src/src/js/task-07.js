// Напиши скрипт, 
// який реагує на зміну значення 
// input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, 
// оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок,
//  буде змінюватися розмір тексту.

const textChange = document.getElementById('text');
console.log(textChange);
const inputElemContr = document.querySelector('#font-size-control');
console.log(inputElemContr);

// const textSize = textChange.textContent;

const inputChange = () => {
    textChange.style.fontSize = inputElemContr.value + "px";
}

inputElemContr.addEventListener('input', inputChange )

