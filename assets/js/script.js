const height = document.querySelector("input[name='height']")
const weight = document.querySelector("input[name='weight']")

const progessBar = document.querySelector(".progress-bar")
const bar = document.querySelector(".bar")

const btn = document.getElementById("btn")
const btnModal = document.querySelector("#close-modal")

const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const imcResult = document.getElementById("imc-value")
const imcText = document.getElementById("imc-text")

const toggleModal = () => {
    [modal, fade].forEach((elemento) => elemento.classList.toggle("hide"))
}

[btnModal, fade].forEach((botao) => {
    botao.addEventListener('click', toggleModal)
})

// const filtroTeclas = function(event) {
//     return ((event.keyCode >= 48 && event.charCode <= 57) || event.charCode == 46)
//   }


const imcCalc = () => {


    const heightValue = parseFloat(height.value.replace(",", "."))
    const weightValue = parseFloat(weight.value.replace(",", "."))


    const imc = (weightValue/(Math.pow(heightValue, 2))).toFixed(2)
    console.log(imc)
    imcResult.innerText = imc

    progessBar.style.setProperty('--progress', imc);

    if(imc <= 18.4){
        bar.style.setProperty('background-color', 'var(--blue)')
        imcText.innerText = "Abaixo do Peso."
    } 
    else if(imc <= 24.9){
        bar.style.setProperty('background-color', 'var(--green)')
        imcText.innerText = "no Peso Normal."
    }
    else if(imc <= 29.9){
        bar.style.setProperty('background-color', 'var(--yellow)')
        imcText.innerText = "em Sobrepeso."
    }
    else if(imc >= 30){
        bar.style.setProperty('background-color', 'var(--red)')
        imcText.innerText = "em grau de Obesidade."
    }
}

btn.addEventListener('click', () => {
    toggleModal();
    imcCalc();
})