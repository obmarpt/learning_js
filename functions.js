const user = { username: "obmar", password: "secret" };

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Impede o envio tradicional do formulário
  
      // Pega os valores dos campos
      const username = document.getElementById("uname").value;
      const password = document.getElementById("password").value;
  
      console.log("Usuário:", username);
      console.log("Senha:", password);
  
      // Aqui você pode fazer validação, login, fetch, etc.
      if (username === user.username && password === user.password) {
        // Mostrar mensagem de login aprovado
        const aL = document.getElementById("aprovedLogin");
        
        aL.style.display = "block";
        
    
        
        setTimeout(() => {
            window.location.href = "learning3/learning3.html";
        }, 2000); // 1000 milissegundos = 1 segundo

    }


    });
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

function continueVerification() {
    const botao = document.getElementById("button3");
    const botaoColor = window.getComputedStyle(botao).backgroundColor;
    const leftColor = window.getComputedStyle(document.getElementById("leftsquare")).backgroundColor;
    const rightColor = window.getComputedStyle(document.getElementById("rightsquare")).backgroundColor;

    const isGrey = botaoColor === "rgb(110, 110, 110)";
    const isLeftGreen = leftColor === "rgb(0, 128, 0)";
    const isRightGreen = rightColor === "rgb(0, 128, 0)";
    const isGreen = botaoColor === "rgb(0, 128, 0)";
    if (isGreen && isLeftGreen && isRightGreen) {
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


