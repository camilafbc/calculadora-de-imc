const altura = document.querySelector("input[name='altura']")
const peso = document.querySelector("input[name='peso']")

const barra = document.querySelector(".progress-bar")
const bar = document.querySelector(".bar")

const btn = document.getElementById("btn")
const btnModal = document.querySelector("#close-modal")

const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const toggleModal = () => {
    [modal, fade].forEach((elemento) => elemento.classList.toggle("hide"))
}

[btnModal, fade].forEach((botao) => {
    botao.addEventListener('click', toggleModal)
})

btn.addEventListener('click', () => {

    toggleModal();
   const imc = peso.value/(Math.pow(altura.value, 2))
    console.log(imc)
    barra.style.setProperty('--progress', imc);

    if(imc <= 18.4){
        bar.style.setProperty('background-color', '#ffff00')
        
    } else {
        bar.style.setProperty('background-color', '#f3f3')
    }
})