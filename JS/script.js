const btnTexto = document.querySelector("#btn-texto");
const titulo = document.querySelector("#titulo");
const imagem = document.querySelector("#imagem1")
const caption = document.querySelector("#caption")

btnTexto.addEventListener("click", function () { // Adiciona um evento de click no botão capturado e assim que for clicado, executa a função.
    if(titulo.innerText === "Iron Man"){
        titulo.innerText = "Hulk";
        imagem.src="media/hulk.png";
        caption.innerText = "Hulk Smash";
    }else if(titulo.innerText === "Hulk"){
        titulo.innerText = "Hawkeye";
        imagem.src="media/hawkeye.png";
        caption.innerText = "O que eu lembro de Budapeste é bem diferente.";
    }else if(titulo.innerText === "Hawkeye"){
        titulo.innerText = "Black Widow";
        imagem.src="media/black_widow.png";
        caption.innerText = "Temos que escolher entre o que o mundo quer que você seja, e quem você é.";
    }else if(titulo.innerText === "Black Widow"){
        titulo.innerText = "Captain America";
        imagem.src="media/cap-america.png";
        caption.innerText = "Guerras se lutam com armas, mas são vencidas com homens.";
    }else if(titulo.innerText === "Captain America"){
        titulo.innerText = "Thor";
        imagem.src="media/thor.png";
        caption.innerText = "Por Asgard!!!";
    }else if(titulo.innerText === "Thor"){
        titulo.innerText = "Iron Man";
        imagem.src="media/ironman.png";
        caption.innerText = "Gênio, bilionário, playboy, filantropo.";
    }

});
