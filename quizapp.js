//Popup handler
const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


button.addEventListener('click', () => {
    popup.style.display = 'block';
})
button.addEventListener('click', () => {
    popup.style.display = 'block';
})
button.addEventListener('mouseover', () => {
    button.style.background = '#23ff9d';
})
button.addEventListener('mouseout', () => {
    button.style.background = 'crimson';
})
close.addEventListener('click', () => {
    popup.style.display = 'none';
})

popup.addEventListener('click', () => {
    popup.style.display = 'none';
})