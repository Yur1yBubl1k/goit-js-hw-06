// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form 
// повинна відбуватися відповідно до події submit.
// Під час відправлення форми 
// сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, 
// виводь alert з попередженням про те, 
// що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля 
// і відправив форму, збери значення полів в об'єкт,
//  де ім'я поля буде ім'ям властивості, 
//  а значення поля - значенням властивості. 
//  Для доступу до елементів форми 
//  використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль 
// і очисти значення полів форми методом reset.

const formGeneral = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');
const acceptLogin = document.querySelector('button[type="submit"]');

console.log(formGeneral);
// console.log(inputEmail);
// console.log(inputPassword);
// console.log(acceptLogin);
 
const formGeneralFunc = (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return console.log(alert("Всі поля повинні бути заповнені"));
    }
return console.log( {
    email: email.value,
    password: password.value,
}, formGeneral.reset())
};
formGeneral.addEventListener('submit', formGeneralFunc);

// const acceptLoginFunc = () => {
//     if (inputEmail.length === "" || inputPassword.length ==="" ) {
//         return console.log(inputEmail.textContent, inputPassword.textContent);
//     }
//     else { alert("Всі поля повинні бути заповнені")

//     }
//     };
    
//     const inputEmailFunc = () => {
//     if (inputEmail.length === "") {
//         alert("Всі поля повинні бути заповнені")
//     } 
//      console.log(inputEmail.textContent);
    
//     };
    
//     const inputPasswordFunc = () => {
//         if (inputPassword.length ==="") {
//             alert("Всі поля повинні бути заповнені")
//             }
//     };


// inputEmail.addEventListener('input', inputEmailFunc);
// inputPassword.addEventListener('input', inputPasswordFunc);
// acceptLogin.addEventListener('input',acceptLoginFunc );