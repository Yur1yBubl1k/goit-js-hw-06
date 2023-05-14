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
 numPlusOne.addEventListener('click', counterIncrement);



