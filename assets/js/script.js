const altura = document.querySelector("input[name='altura']")
const peso = document.querySelector("input[name='peso']")

const barra = document.querySelector(".progress-bar")

const btn = document.getElementById("btn")

btn.addEventListener('click', () => {
    let imc = parseFloat(peso.value / (altura.value*altura.value))
    
    barra.style.setProperty('--progress', imc);
})