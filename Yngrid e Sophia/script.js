function termo (){
    const acerteSenha =document.querySelector (".acerteSenha")

    for (let c = 1; c <= 6; c++) {
        for ( let i = 1;i <= 5;i++){
            let quadrado = document.createElement ("div")
            quadrado.classList.add ("quadrado")

            acerteSenha.appendChild(quadrado)

        }
    }
}

termo ()

const arrayPalavras = [
    "jogos",
    "porta",
    "amora",
    "carro",
    "mundo"
    
]
let palavraSorteada;

const frase = document.createElement ("P")


function sortearFrase () {
    let indice = Math.floor(Math.random() * arrayPalavras.length)

    return palavraSorteada = arrayPalavras[indice]

}

sortearFrase()
console.log(palavraSorteada)


let btnEnviar = document.querySelector (".btnEnviar")
let inputText = document.querySelector (".inputText")
inputText.maxLength = 5
let posicaoLetra = 0

let atual = 0
let numero = document.querySelector (".num")
const btnReiniciar = document.querySelector(".btnReiniciar") 

btnEnviar.addEventListener ("click", function(){
    verificar()
})

inputText.addEventListener ("keydown", function (event) {
    if (event.key === "Enter")
        verificar()
})

function verificar (){
    
    let input = document.querySelector (".inputText")
    let texto = input.value.trim()
    
    if (texto.length < 5) {
        return
    }

    let quadrado = document.querySelectorAll(".quadrado")

    for (let i = 0; i < 5; i++){
        let num = quadrado[posicaoLetra]
        num.classList.remove("certo", "erro", "meioCerto")
        num.textContent = texto[i]

        if (texto[i] == palavraSorteada[i]){
            num.classList.add("certo")
        } 

        else if (
            texto[i] == palavraSorteada[0] || 
            texto[i] == palavraSorteada[1] || 
            texto[i] == palavraSorteada[2] || 
            texto[i] == palavraSorteada[3] || 
            texto[i] == palavraSorteada[4]
        ) {
            num.classList.add("meioCerto")
        }

        else {
            num.classList.add("erro")
        }
        posicaoLetra++
        

    }

    atual++
    numero.textContent = atual + ""


    input.value = ""
}

const modalVitoria = document.querySelector("#SYmodalVitoria")
const modalDerrota = document.querySelector("#SYmodalDerrota")
const btnFecharVitoria = document.querySelector("#SYmodalVitoria.SYbtnFechar" )
const btnFecharDerrota = document.querySelector("#SYmodalDerrota .SYbtnReiniciar2")

btnEnviar.addEventListener("click", function() {
    verificar()
})

inputText.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificar()
    }

})
function verificar() {
    let texto = inputText.value.trim().toLowerCase()
    if (texto.length < 5) {
        return
    }

    let quadrado = document.querySelectorAll(".quadrado")
    for (let i = 0; i < 5; i++) {
        let num = quadrado[posicaoLetra]
        num.classList.remove(
            "certo",
            "erro",
            "meioCerto"
        )


        num.textContent = texto[i]

        if (texto[i] == palavraSorteada[i]) {

            num.classList.add("certo")

        } else if (

            texto[i] == palavraSorteada[0] ||

            texto[i] == palavraSorteada[1] ||

            texto[i] == palavraSorteada[2] ||

            texto[i] == palavraSorteada[3] ||

            texto[i] == palavraSorteada[4]

        ) {

            num.classList.add("meioCerto")

        } else {

            num.classList.add("erro")

        }


        posicaoLetra++

    }

    atual++

    numero.textContent = atual + ""

    inputText.value = ""

    if (texto === palavraSorteada) {

        modalVitoria.classList.add("is-active")

        return

    } else if (atual === 6) {

        modalDerrota.classList.add("is-active")

        return

    }

}

btnFecharVitoria.addEventListener("click", function() {

    modalVitoria.classList.remove("is-active")

})

btnFecharDerrota.addEventListener("click", function() {

    modalDerrota.classList.remove("is-active")

})

btnReiniciar.addEventListener("click", function() {

    reiniciarJogo()

})

function reiniciarJogo() {

    posicaoLetra = 0

    atual = 0

    numero.textContent = "0"

    inputText.value = ""

    sortearFrase()

    let quadrado =
        document.querySelectorAll(".quadrado")


    for (let i = 0; i < 30; i++) {

        quadrado[i].textContent = ""

        quadrado[i].classList.remove(
            "certo",
            "erro",
            "meioCerto"
        )

    }

    modalVitoria.classList.remove("is-active")

    modalDerrota.classList.remove("is-active")

}