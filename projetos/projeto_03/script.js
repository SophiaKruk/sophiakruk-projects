const frases = [
    "Acredite em você.", 
    "Nunca desista dos seus sonhos.", 
    "Cada passo conta.", 
    "Você é capaz de superar desafios.", 
    "Transforme obstáculos em oportunidades.", 
    "Persista mesmo quando for difícil.", 
    "Seu esforço de hoje constrói seu amanhã.", 
    "Confie no seu potencial.", 
    "Comece, mesmo que seja pequeno.", 
    "Você consegue!"
]

const fraseTexto = document.querySelector(".frase");
const btnFrase = document.querySelector(".btnFrase");

function mostrarFrase() {
    let indice = Math.floor(Math.random() * frases.length);
    fraseTexto.textContent = frases[indice]
}

btnFrase.addEventListener("click", function(){
    mostrarFrase();
});

