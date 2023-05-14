const formGeneral = document.querySelector('.login-form');

const formGeneralFunc = (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    console.log(alert("Всі поля повинні бути заповнені"));
    }
    console.log( {
    email: email.value,
    password: password.value,
})
    formGeneral.reset()
};
formGeneral.addEventListener('submit', formGeneralFunc);
