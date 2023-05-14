const inputElem = document.querySelector('#validation-input');

const rightNum = () => {
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

inputElem.addEventListener('blur', rightNum)


