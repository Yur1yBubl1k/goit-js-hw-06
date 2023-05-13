// Напиши скрипт, який під час втрати фокусу на інпуті 
// (подія blur), 
// перевіряє його вміст щодо правильної 
// кількості введених символів.
// Яка кількість символів повинна бути в інпуті, 
// зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, 
// то border інпуту стає зеленим, 
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.

const inputElem = document.querySelector('#validation-input');


const rightNum = () => {
//  
    const expectedLength = inputElem.dataset.length;
    const actualLength = inputElem.value.length;
  
    if (actualLength === parseInt(expectedLength)) {
        inputElem.classList.add("valid");
        inputElem.classList.remove("invalid");
    } else {
        inputElem.classList.add("invalid");
      inputElem.classList.remove("valid");
    }
   
}

const qwer = "123542562";
console.log(parseInt(qwer))



inputElem.addEventListener('blur', rightNum)


