const btnModal = document.querySelector("#close-modal")

const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")


function toggleModal(){
    [modal, fade].forEach((elemento) => elemento.classList.toggle("hide"))
}

[btnModal, fade].forEach((botao) => {
    botao.addEventListener('click', toggleModal)
})

export { toggleModal }