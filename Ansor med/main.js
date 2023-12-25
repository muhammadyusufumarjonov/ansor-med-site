let container = document.querySelector('.hero-btn')
let body = document.querySelector('.hero')
let body2 = document.querySelector('.register-section')
// let colorText = document.querySelector('.hero-title')
const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'd',
    'e',
    'f',
];
// get gradient
function getGradient(){
    let color = '#'
    for(let i = 0; i < 6; i++){
        const randomNumber  = Math.trunc(Math.random () * values.length)
        color += values[randomNumber]
    }

    return color 
}
const color1  = getGradient()
const color2  = getGradient()

// set Gradient
function setGradient(){
    const color1 = getGradient()
    const color2 = getGradient()
    const randomDeg = Math.trunc(Math.random() * 360)
    const bgColor = `linear-gradient(
        ${randomDeg}deg, 
        ${color1},
        ${color2}
    )`
    body.style.background = bgColor
    body2.style.background = bgColor
    // colorText.textContent = bgColor 
}
setInterval(setGradient, 7000);
// let counter = 0;
// const countInterval =  setInterval(setGradient, 5000);
//     if (counter > 2){
//         clearInterval(countInterval)
//     }
setGradient()
container.addEventListener('click', setGradient)



$(document).ready(function () {
    $(".radio-btn").click(function () {
        $(".radio-inner").toggleClass("active")
        $("body").toggleClass("dark")
    })
})

// let p = document.querySelector('p')
// let a = document.querySelector('a')
// let h2 = document.querySelector('h2')
// let h1 = document.querySelector('h1')


// Select the button
const btn = document.querySelector('.radio-btn');

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');  
})

