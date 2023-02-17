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


// height.addEventListener('input', function(e){
//     console.log(`A tecla pressionada foi ${e.code}`)
//     console.log(`Testando o which. A tecla foi ${String.fromCharCode(e.key)}`)
//     if((e.key >= 0 && e.key <= 9 || e.key == "," || e.key == ".")){
//         if(((e.key == "," || e.key == ".") && (height.value.includes(",") || height.value.includes(".")))){
//             e.preventDefault()
//             // console.log("Acrescentando a mais :(")
//         }
//         return true 
//     } else {
//         e.preventDefault()
//     }
// })



// weight.addEventListener('keypress', function(e){
//     // console.log(`A tecla pressionada foi ${e.key}`)
//     if((e.key >= 0 && e.key <= 9 || e.key == "," || e.key == ".")){
//         if(((e.key == "," || e.key == ".") && (weight.value.includes(",") || weight.value.includes(".")))){
//             e.preventDefault()
//             // console.log("Acrescentando a mais :(")
//         }
//         return true 
//     } else {
//         e.preventDefault()
//     }
// })



const imcCalc = () => {
    const heightValue = parseFloat(height.value.replace(",", "."))
    const weightValue = parseFloat(weight.value.replace(",", "."))


    const imc = (weightValue/(Math.pow(heightValue, 2))).toFixed(2)
    // console.log(imc)
    imcResult.innerText = imc

    if(isNaN(imc)){
        return
    } else {toggleModal();}

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

    height.value = ""
    weight.value = ""
}

btn.addEventListener('click', () => {
    imcCalc();
})