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
    "carros",
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

btnEnviar.addEventListener ("click", function(){
    verificar()
})

inputText.addEventListener ("keydown", function (event) {
    if (event.key === "Enter")
        verificar()
})

function verificar (){
    
    let input = document.querySelector (".inputText")
    let inputValue = input.value
    

    let quadrado = document.querySelectorAll(".quadrado")

    for (let i = 0; i < 5; i++){
        let num = quadrado[posicaoLetra]
        num.classList.remove("certo", "erro", "meioCerto")
        num.textContent = inputValue[i]

        if (inputValue[i] == palavraSorteada[i]){
            num.classList.add("certo")
        } 

        else if (
            inputValue[i] == palavraSorteada[0] || 
            inputValue[i] == palavraSorteada[1] || 
            inputValue[i] == palavraSorteada[2] || 
            inputValue[i] == palavraSorteada[3] || 
            inputValue[i] == palavraSorteada[4]
        ) {
            num.classList.add("meioCerto")
        }

        else {
            num.classList.add("erro")
        }
        posicaoLetra++
    }

    input.value = ""
}

