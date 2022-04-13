const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {

    const r = randomNumber();
    const g = randomNumber();
    const b = randomNumber();

    const randomColor =  `rgb(${r},${g},${b})`;

color.textContent = randomColor;
document.body.style.backgroundColor = randomColor;
})

const randomNumber = function() {
    return Math.floor(Math.random() * 256);
}




