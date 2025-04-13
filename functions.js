// Seleciona o botão
const botao = document.getElementById("meuBotao");

// Adiciona um evento de clique
botao.addEventListener("click", function() {
  alert("Botão foi clicado!");
});

function changeLeft() {
    const left = document.getElementById("leftsquare");
    const currentColor = window.getComputedStyle(left).backgroundColor;

    if (currentColor === "rgb(0, 128, 0)") { // green
        left.style.backgroundColor = "red";
    } else {
        left.style.backgroundColor = "green";
        continueLearn();
    }
}

function changeRight() {
    const right = document.getElementById("rightsquare");
    const currentColor = window.getComputedStyle(right).backgroundColor;

    if (currentColor === "rgb(0, 128, 0)") { // green
        right.style.backgroundColor = "red";
    } else {
        right.style.backgroundColor = "green";
        continueLearn();
    }
}

function continueVerification(){
    const botao = document.getElementById("button3");
    const botaoColor = window.getComputedStyle(botao).backgroundColor;
    const leftColor = window.getComputedStyle(document.getElementById("leftsquare")).backgroundColor;
    const rightColor = window.getComputedStyle(document.getElementById("rightsquare")).backgroundColor;

    const isGrey = botaoColor === "rgb(110, 110, 110)";
    const isLeftGreen = leftColor === "rgb(0, 128, 0)";
    const isRightGreen = rightColor === "rgb(0, 128, 0)";
    const isGreen = botaoColor === "rgb(0, 128, 0)";
    if (isGreen && isLeftGreen && isRightGreen){
        window.location.href = "learning2.html";

    }

}


function continueLearn() {
    const botao = document.getElementById("button3");
    const botaoColor = window.getComputedStyle(botao).backgroundColor;
    const leftColor = window.getComputedStyle(document.getElementById("leftsquare")).backgroundColor;
    const rightColor = window.getComputedStyle(document.getElementById("rightsquare")).backgroundColor;

    const isGrey = botaoColor === "rgb(110, 110, 110)";
    const isLeftGreen = leftColor === "rgb(0, 128, 0)";
    const isRightGreen = rightColor === "rgb(0, 128, 0)";
    const isGreen = botaoColor === "rgb(0, 128, 0)";
    


    if (isGrey && isLeftGreen && isRightGreen) {
        console.log("Both green, next page available");
        botao.style.backgroundColor = "rgb(0, 128, 0)";
        botao.disabled = false;
        botao.style.cursor = "pointer";
    } else {
        if (isGreen && (!isLeftGreen || !isRightGreen)) {
            botao.style.backgroundColor = "rgb(110, 110, 110)";
            botao.disabled = true;
            botao.style.cursor = "default";
        }
    }

    




}
