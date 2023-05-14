const textChange = document.getElementById('text');
const inputElemContr = document.querySelector('#font-size-control');

const inputChange = () => {
    textChange.style.fontSize = inputElemContr.value + "px";
    
}

inputElemContr.addEventListener('input', inputChange )

