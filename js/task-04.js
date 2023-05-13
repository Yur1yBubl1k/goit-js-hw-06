// Створи змінну counterValue, 
// в якій буде зберігатися поточне значення лічильника 
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй 
// або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const numPlusOne = document.querySelector('button[data-action="increment"]');
const numMinusOne = document.querySelector('button[data-action="decrement"]');
 
const counterValue = document.querySelector('#value');
let count = 0;

const counterDecrement = () => {
    count -= 1;
    counterValue.textContent = count;
 }
 numMinusOne.addEventListener('click', counterDecrement) ;

 const counterIncrement = () => {
    count += 1;
    counterValue.textContent = count;
 }
 numPlusOne.addEventListener('click', counterIncrement) ;



