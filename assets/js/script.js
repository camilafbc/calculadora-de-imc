const altura = document.querySelector("input[name='altura']")
const peso = document.querySelector("input[name='peso']")

const barra = document.querySelector(".progress-bar")

const btn = document.getElementById("btn")

btn.addEventListener('click', () => {
   const imc = peso.value/(Math.pow(altura.value, 2))
    console.log(imc)
    barra.style.setProperty('--progress', imc);
})