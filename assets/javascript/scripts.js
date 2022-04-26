const paginaCriacao1 = document.querySelector(".criacao-informacoes");
/* FUNÇÃO DO BOTÃO QUE CRIA NOVOS QUIZZES
    ao clicar muda a página para de criação */
function criarQuizz() {

    botao = document.querySelector(".nenhum-quizz");
    botao.classList.add("escondido");
    //depois de criar a página de criação fazer com que ela apareça nessa função
    paginaCriacao1.classList.remove("escondido");

    /*~Anelize*/
    let listaquizzes = document.querySelector(".listadequizzes");
    listaquizzes.classList.add("escondido");
    /*~Anelize*/
}
//
//FUNÇÃO QUE MUDA A PÁGINA AO CLICAR NO QUIZZ-o click em em quizz que já existe encaminha o usuário para próxima página//
function mudar_pagina() {
    //aqui tiramos as divs da página
    let parteum = document.querySelector(".nenhum-quizz");
    parteum.classList.add("escondido");

    let partedois = document.querySelector(".seus-quizzes");
    partedois.classList.add("escondido");
        
    let partetres = document.querySelector(".listadequizzes");
    partetres.classList.add("escondido");
    
    //aqui adicionamos novas divs

    let partequatro = document.querySelector(".titulo-de-cada-quizz");
    partequatro.classList.remove("escondido");

    let partecinco = document.querySelector(".caixa-de-respostas");
    partecinco.classList.remove("escondido");  
    
}

function ehValido(){
    const titulo = document.querySelector(".titulo-quizz").value;
    const imagemQuizz = document.querySelector(".imagem-principal-quizz").value;
    const qtdPerguntas = Number(document.querySelector(".quantidade-perguntas").value);
    const qtdNiveis = Number(document.querySelector(".quantidade-niveis").value);

    /* FAZ A COMPARAÇÃO DOS VALORES COM REQUISITOS 
        se titulo tem no minimo 20 caracteres e no maximo 65 e
        se quantidade de perguntas é pelo menos 3 e
        se quantidade dos niveis pelo menos 2  e
        se a última letra do link é 'g', E se a penúltima é ('e', 'p', 'v', ou 'n'), a antepenúltima ('p', 'j' ou 's') e por fim se a quarta ultima é 'j' 
        isso é feito para verificar se a entensao do link é JPEG, JPG, SVG OU PNG 
        */
    if ((titulo.length >= 20 && titulo.length <= 65) && qtdPerguntas >= 3 && qtdNiveis >= 2 &&
        (imagemQuizz[imagemQuizz.length - 1] === 'g' || imagemQuizz[imagemQuizz.length - 1] === 'G') && (imagemQuizz[imagemQuizz.length - 2] === 'e' || imagemQuizz[imagemQuizz.length - 2] === 'E' || 
        imagemQuizz[imagemQuizz.length - 2] === 'p' || imagemQuizz[imagemQuizz.length - 2] === 'P' || imagemQuizz[imagemQuizz.length - 2] === 'v' || imagemQuizz[imagemQuizz.length - 2] === 'V' ||
        imagemQuizz[imagemQuizz.length - 2] === 'n' || imagemQuizz[imagemQuizz.length - 2] === 'N') && (imagemQuizz[imagemQuizz.length - 3] === 'p' || imagemQuizz[imagemQuizz.length - 3] === 'P' ||
        imagemQuizz[imagemQuizz.length - 3] === 'j' || imagemQuizz[imagemQuizz.length - 3] === 'J' || imagemQuizz[imagemQuizz.length - 3] === 's' || imagemQuizz[imagemQuizz.length - 3] === 'S') ||
        (imagemQuizz[imagemQuizz.length - 4] === 'j' || imagemQuizz[length - 4] === 'J')) {
        return true;
    } 
    return false;
}
/* FUNÇÃO DO BOTÃO QUE VALIDA INFORMAÇÕES 
    ao clicar verifica se as informações para criação do quizz atende os requisitos */
function validaCriacao() {

    if (ehValido()) {
        paginaCriacao1.classList.add("escondido");
    } else {
        alert("Preencha os dados corretamente");
    }
}
let array = [];//variavel global que armazena meus dados numa array;

//FUNÇÃO QUE ARMAZENA MEUS DADOS NUMA ARRAY
function dadosnaarray(){
    let promise=axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
    promise.then(processarresposta);
    function processarresposta(resposta){
     array=resposta.data;
     embaralhararray();
     console.log(array);
     dadosnocss();
    }
}
//FIM DA FUNÇÃO QUE ARMAZENA MEUS DADOS NUMA ARRAY

//FUNÇÃO QUE EMBARLHA MINHA ARRAY
function embaralhararray(){    
    function comparador() { 
        return Math.random() - 0.5;} 
        array.sort(comparador);   
    }  
//FIM DE UMA FUNÇÃO QUE EMBARALHA MINHA ARRAY

//FUNÇÃO QUE ARMAZENA DADOS NO CSS
function dadosnocss(meusdados){
    //parte 1 - adicionando dados na lista de quizzes
    for(let i=0;i<=6;i++){
    let ndado = Object.assign({},array[i]);//transformando minha array num objeto
    const nomedomeuquizz = document.querySelector(".nomedoquizz");
    nomedomeuquizz.innerHTML = ndado.title;
    const fotodomeuquizz  = document.querySelector(".plano-de-fundo");
    fotodomeuquizz.src = ndado.image;

    //Aqui começa a alterar elementos da página2  
    const titulo = document.querySelector(".titulo");
    titulo.innerHTML = ndado.title;
    const pergunta = document.querySelector(".perguntas-texto");
    pergunta.innerHTML = ndado.questions.title;
    const imagem= document.querySelector(".resposta-imagem");
    imagem.src =ndado.questions.answers.image; 
    const resposta= document.querySelector(".resposta-texto");
    resposta.innerHTML = ndado.questions.answers.text;
    }
     //parte 2 - adicionando dados na página de um quizz 
    }       
//FIM DA FUNÇÃO QUE ARMAZENA DADOS NO CSS

dadosnaarray();