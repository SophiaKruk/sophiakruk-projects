function termo() {

    const acerteSenha = document.querySelector(".acerteSenha")

    for (let c = 1; c <= 6; c++) {

        for (let i = 1; i <= 5; i++) {

            let quadrado = document.createElement("div")

            quadrado.classList.add("quadrado")

            acerteSenha.appendChild(quadrado)
        }
    }
}

termo()

const arrayPalavras = [
    "jogos",
    "porta",
    "amora",
    "carro",
    "mundo",
    "selva",
    "pulga",
    "cinto",
    "ferro"
]

let palavraSorteada

function sortearFrase() {

    let indice =
        Math.floor(
            Math.random() *
            arrayPalavras.length
        )

    palavraSorteada = arrayPalavras[indice]

}

sortearFrase()

console.log(palavraSorteada)

let btnEnviar = document.querySelector(".btnEnviar")

let inputText = document.querySelector(".inputText")

let numero = document.querySelector(".num")

const btnReiniciar = document.querySelector(".btnReiniciar")

inputText.maxLength = 5

let posicaoLetra = 0

let atual = 0


const SYmodalVitoria = document.querySelector("#SYmodalVitoria")

const SYmodalDerrota = document.querySelector("#SYmodalDerrota")


const SYbtnFechar = document.querySelector("#SYmodalVitoria .SYbtnFechar")

const SYbtnFechar2 = document.querySelector("#SYmodalDerrota .SYbtnFechar2")


btnEnviar.addEventListener("click", function() {
        verificar()
    }
)

inputText.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            verificar()
        }
    }
)

function verificar() {
    let input =
        document.querySelector(".inputText")

    let texto =
        input.value.trim().toLowerCase()

    if (texto.length < 5) {
        return
    }


    let quadrado = document.querySelectorAll(".quadrado")

    for (let i = 0; i < 5; i++) {
        let num =
            quadrado[posicaoLetra]

        num.classList.remove(
            "certo",
            "erro",
            "meioCerto"
        )

        num.textContent = texto[i]

        if (texto[i] == palavraSorteada[i]) {
            num.classList.add("certo")
        }else if (
            texto[i] == palavraSorteada[0] ||
            texto[i] == palavraSorteada[1] ||
            texto[i] == palavraSorteada[2] ||
            texto[i] == palavraSorteada[3] ||
            texto[i] == palavraSorteada[4]) {
            num.classList.add("meioCerto")
        }else {
            num.classList.add("erro")
        }
        posicaoLetra++
    }

    atual++

    numero.textContent =
        atual + ""


    input.value = ""

    if (texto === palavraSorteada) {

        SYmodalVitoria.classList.add("is-active")
        return

    } 
    if (atual === 6) {
        SYmodalDerrota.classList.add("is-active")
        return
    }
}

SYbtnFechar.addEventListener("click", function() {
        SYmodalVitoria.classList.remove("is-active")
    }
)
SYbtnFechar2.addEventListener("click", function() {
        SYmodalDerrota.classList.remove("is-active")
    }
)

btnReiniciar.addEventListener("click", function() {
        reiniciarJogo()
    }
)

function reiniciarJogo() {

    atual = 0

    numero.textContent = "0"

    posicaoLetra = 0

    inputText.value = ""

    sortearFrase()

    let quadrado = document.querySelectorAll(".quadrado")

    for (let i = 0; i < 30; i++) {

        quadrado[i].textContent = ""

        quadrado[i].classList.remove(
            "certo",
            "erro",
            "meioCerto"
        )
    }

    SYmodalVitoria.classList.remove(
        "is-active"
    )

    SYmodalDerrota.classList.remove(
        "is-active"
    )

}
