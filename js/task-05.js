// Напиши скрипт, який під час набору тексту в інпуті 
// input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, 
// у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output')

const onInputChange = (event) => {
console.log(event.currentTarget.value);
if (event.currentTarget.value.length === 0) {
    nameEl.textContent = "Anonymous"
}
else {nameEl.textContent = event.currentTarget.value;}

};

inputEl.addEventListener('input', onInputChange )




// console.log(inputEl);
// console.log(nameEl);