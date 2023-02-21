import { toggleModal } from "./toggleModal.js";

const progessBar = document.querySelector(".progress-bar")
const bar = document.querySelector(".bar")

const imcResult = document.getElementById("imc-value")
const imcText = document.getElementById("imc-text")


function print(imc){
    imcResult.innerText = imc
   
    if(isNaN(imc) || imc === "" || imc == "0.00") return 
    else {toggleModal();}

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

export { print }