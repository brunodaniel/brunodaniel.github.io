const btnTexto = document.querySelector("#btn-texto");
const titulo = document.querySelector("#titulo");
const imagem = document.querySelector("#imagem1")


btnTexto.addEventListener("click", function () { // Adiciona um evento de click no botão capturado e assim que for clicado, executa a função.
    if(titulo.innerText === "Iron Man"){
    titulo.innerText === "Hulk";
    imagem.src="media/hulk.png"
    }else if(titulo.innerText === "Hulk"){
    titulo.innerText === "Hawkeye";
    imagem.src="media/hawkeye.png"
    }

});

