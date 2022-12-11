// grab the different DOM elements
const booger = document.getElementById('nametag');
const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const colorInput = document.getElementById('color-input');
const button = document.getElementById('update-button');
// add event listener for the click
button.addEventListener('click', () => {
    // update the nameDisplay with the value in the input
    nameDisplay.textContent = nameInput.value;
    // change the style to red text
    nameDisplay.style.color = 'red';
    // change the background color
    booger.style.backgroundColor = colorInput.value;
});

nameInput.addEventListener('keyup', () => {
    nameDisplay.textContent = nameInput.value;
});
