function termo() {

    const SYacerteSenha = document.querySelector(".SYacerteSenha")

    for (let c = 1; c <= 6; c++) {

        for (let i = 1; i <= 5; i++) {

            let SYquadrado = document.createElement("div")

            SYquadrado.classList.add("SYquadrado")

            SYacerteSenha.appendChild(SYquadrado)
        }
    }
}

termo()

const SYarrayPalavras = [
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

let SYpalavraSorteada

function SYsortearFrase() {

    let SYindice =
        Math.floor(
            Math.random() *
            SYarrayPalavras.length
        )

    SYpalavraSorteada = SYarrayPalavras[SYindice]

}

SYsortearFrase()

console.log(SYpalavraSorteada)

let SYbtnEnviar = document.querySelector(".SYbtnEnviar")

let SYinputText = document.querySelector(".SYinputText")

let SYnumero = document.querySelector(".SYnum")

const SYbtnReiniciar = document.querySelector(".SYbtnReiniciar")

SYinputText.maxLength = 5

let SYposicaoLetra = 0

let SYatual = 0


const SYmodalVitoria = document.querySelector("#SYmodalVitoria")

const SYmodalDerrota = document.querySelector("#SYmodalDerrota")


const SYbtnFechar = document.querySelector("#SYmodalVitoria .SYbtnFechar")

const SYbtnFechar2 = document.querySelector("#SYmodalDerrota .SYbtnFechar2")


SYbtnEnviar.addEventListener("click", function() {
        verificar()
    }
)

SYinputText.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            verificar()
        }
    }
)

function verificar() {
    let SYinput =
        document.querySelector(".SYinputText")

    let SYtexto =
        SYinput.value.trim().toLowerCase()

    if (SYtexto.length < 5) {
        return
    }


    let SYquadrado = document.querySelectorAll(".SYquadrado")

    for (let i = 0; i < 5; i++) {
        let SYnum =
            SYquadrado[SYposicaoLetra]

        SYnum.classList.remove(
            "SYcerto",
            "SYerro",
            "SYmeioCerto"
        )

        SYnum.textContent = SYtexto[i]

        if (SYtexto[i] == SYpalavraSorteada[i]) {
            SYnum.classList.add("SYcerto")
        }else if (
            SYtexto[i] == SYpalavraSorteada[0] ||
            SYtexto[i] == SYpalavraSorteada[1] ||
            SYtexto[i] == SYpalavraSorteada[2] ||
            SYtexto[i] == SYpalavraSorteada[3] ||
            SYtexto[i] == SYpalavraSorteada[4]) {
            SYnum.classList.add("SYmeioCerto")
        }else {
            SYnum.classList.add("SYerro")
        }
        SYposicaoLetra++
    }

    SYatual++

    SYnumero.textContent =
        SYatual + ""


    SYinput.value = ""

    if (SYtexto === SYpalavraSorteada) {

        SYmodalVitoria.classList.add("is-active")
        return

    } 
    if (SYatual === 6) {
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

SYbtnReiniciar.addEventListener("click", function() {
        reiniciarJogo()
    }
)

function reiniciarJogo() {

    SYatual = 0

    SYnumero.textContent = "0"

    SYposicaoLetra = 0

    SYinputText.value = ""

    SYsortearFrase()

    let SYquadrado = document.querySelectorAll(".SYquadrado")

    for (let i = 0; i < 30; i++) {

        SYquadrado[i].textContent = ""

        SYquadrado[i].classList.remove(
            "SYcerto",
            "SYerro",
            "SYmeioCerto"
        )
    }

    SYmodalVitoria.classList.remove(
        "is-active"
    )

    SYmodalDerrota.classList.remove(
        "is-active"
    )

}