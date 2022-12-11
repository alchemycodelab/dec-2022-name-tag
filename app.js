const booger = document.getElementById('nametag');
const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const colorInput = document.getElementById('color-input');
const button = document.getElementById('update-button');
button.addEventListener('click', () => {
    console.log('i am clicking the button');
    console.log(nameDisplay);
    // nameDisplay.textContent = 'Julie';
    nameDisplay.textContent = nameInput.value;
    nameDisplay.style.color = 'red';
    booger.style.backgroundColor = colorInput.value;
});
