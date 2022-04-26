const paginaCriacao1 = document.querySelector(".criacao-informacoes");
const paginaCriacao2 = document.querySelector(".criacao-perguntas");
const paginaNiveis = document.querySelector(".criacao-niveis");

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


const titulo = document.querySelector(".titulo-quizz").value;   /* VARIAVEIS QUE ARMAZENAM AS INFORMAÇÕES DO QUIZZ*/
const imagemQuizz = document.querySelector(".imagem-principal-quizz").value;
const qtdPerguntas = Number(document.querySelector(".quantidade-perguntas").value);
const qtdNiveis = Number(document.querySelector(".quantidade-niveis").value);

function ehInformacaoValida(){

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
        (imagemQuizz[imagemQuizz.length - 4] === 'j' || imagemQuizz[imagemQuizz.length - 4] === 'J')) {
        return true;
    } 
    return false;
}

let padrao = /[#][0-9a-f]+/i;
let exemplo = "#A12F65";
let resultado = exemplo.match(padrao);


let textoPergunta = []; /* VARIAVEIS USADAS NA FUNÇÃO DE VALIDAÇÃO PERGUNTAS*/
let corPergunta = [];
let respostaCorreta = [];
let respostaIncorreta1 = [];
let respostaIncorreta2 = [];
let respostaIncorreta3 = [];
let urlResposta = [];

function ehPerguntaValida() {
    for(let i = 0; i< qtdPerguntas; i++){
        if( textoPergunta[i].length >= 20 && respostaCorreta !== [] && (respostaIncorreta1 !== [] || respostaIncorreta2 !== []|| respostaIncorreta3 !== []) &&
             corPergunta[i].match(padrao) !== null &&
            (urlResposta[i][urlResposta[i].length - 1] === 'g' || urlResposta[i][urlResposta[i].length - 1] === 'G') && (urlResposta[i][urlResposta[i].length - 2] === 'e' || urlResposta[i][urlResposta[i].length - 2] === 'E' || 
            urlResposta[i][urlResposta[i].length - 2] === 'p' || urlResposta[i][urlResposta[i].length - 2] === 'P' || urlResposta[i][urlResposta[i].length - 2] === 'v' || urlResposta[i][urlResposta[i].length - 2] === 'V' ||
            urlResposta[i][urlResposta[i].length - 2] === 'n' || urlResposta[i][urlResposta[i].length - 2] === 'N') && (urlResposta[i][urlResposta[i].length - 3] === 'p' || urlResposta[i][urlResposta[i].length - 3] === 'P' ||
            urlResposta[i][urlResposta[i].length - 3] === 'j' || urlResposta[i][urlResposta[i].length - 3] === 'J' || urlResposta[i][urlResposta[i].length - 3] === 's' || urlResposta[i][urlResposta[i].length - 3] === 'S') ||
            (urlResposta[i][urlResposta[i].length - 4] === 'j' || urlResposta[i][urlResposta[i].length - 4] === 'J')) {
                return true;
            } else {
                return false;
            }
        }
}

let tituloNivel = [];   /* VARIAVEIS USADAS NAS FUNCOES DE VALIDAÇÃO NIVEL */
let porcentagens = [];  /* os arrays armazenam informações de cada nivel*/
let imagens = []; 
let descricao = [];
let valida = [];
let minima0;    /* variavel usada para verificar se algum nivel possui a porcentagem minima igual a 0% */

function ehNivelValido(){
    /* FAZ A COMPARAÇÃO DOS VALORES COM REQUISITOS DOS NIVEIS
        se titulo tem no minimo 10 caracteres
        se porcentagem de acerto é um número entre 0 e 100 e
        se descrição do nivel tem pelo menos 30 caracteres  e
        se existe pelo menos um nivel com minimo de acerto 0 e 
        por fim faz a mesma validação do link conforme função de validação anterior
        */
    for(let i = 0; i < qtdNiveis; i++){
        if(tituloNivel[i].length >= 10 && porcentagens[i] >= 0 && porcentagens[i] <= 100 && descricao[i].length >= 30 && minima0 !== undefined &&
            (imagens[i][imagens[i].length - 1] === 'g' || imagens[i][imagens[i].length - 1] === 'G') && (imagens[i][imagens[i].length - 2] === 'e' || imagens[i][imagens[i].length - 2] === 'E' ||
            imagens[i][imagens[i].length - 2] === 'p' || imagens[i][imagens[i].length - 2] === 'P' || imagens[i][imagens[i].length - 2] === 'v' || imagens[i][imagens[i].length - 2] === 'V' ||
            imagens[i][imagens[i].length - 2] === 'n' || imagens[i][imagens[i].length - 2] === 'N') && (imagens[i][imagens[i].length - 3] === 'p' || imagens[i][imagens[i].length - 3] === 'P' ||
            imagens[i][imagens[i].length - 3] === 'j' || imagens[i][imagens[i].length - 3] === 'J' || imagens[i][imagens[i].length - 3] === 's' || imagens[i][imagens[i].length - 3] === 'S') ||
            (imagens[i][imagens[i].length - 4] === 'j' || imagens[i][imagens[i].length - 4] === 'J')) {
            return true;
        }
        return false;
    }
}
/* FUNÇÃO DO BOTÃO QUE VALIDA INFORMAÇÕES 
    ao clicar verifica se as informações para criação do quizz atende os requisitos */
function validaCriacao() {
    console.log(paginaCriacao2);
    if (ehInformacaoValida()) {
        paginaCriacao1.classList.add("escondido");
        paginaCriacao2.classList.remove("escondido");

    } else {
        alert("Preencha os dados corretamente");
    }
    inserePerguntas();
}

function insereNiveis() {
    /*     FUNÇÃO QUE INSERE NIVEIS CONFORME ESPECIFICADO PELO USUARIO
            adiciona divs para cada nivel no html */
    const container = document.querySelector(".niveis");
    container.innerHTML = '';
    for (let i = 0; i < qtdNiveis; i++) {
        container.innerHTML += `
            <div class="nivel n${i + 1}">
                <h3>Nível ${i + 1}</h3>
                <input type="text" placeholder="Título do nível" class="titulo-nivel-${i + 1}">
                <input type="text" placeholder="% de acerto mínima" class="porcentagem-nivel-${i + 1}">
                <input type="url" placeholder="URL da imagem do nível" class="imagem-nivel-${i + 1}">
                <input type="text" placeholder="Descrição do nível" class="descricao-nivel-${i + 1}">
            </div>  
            `
    }

    container.innerHTML += `
        <button onclick="validaNiveis()">Finalizar Quizz</button>
        `
}

function inserePerguntas() {
    const perguntas = document.querySelector(".seriePerguntas");
    perguntas.innerHTML = '';
    for (let i = 0; i < qtdPerguntas; i++) {
        perguntas.innerHTML += `
            <div class="pergunta">
                <h3>Pergunta ${i + 1}</h3>
                <input type="text" placeholder= "Texto da pergunta" class="texto-pergunta-${i + 1}">
                <input type="text" placeholder="Cor de fundo da pergunta" class="cor-fundo-pergunta-${i + 1}">
                <h3>Resposta correta</h3>
                <input type="text" placeholder="Resposta correta" class="resposta-correta-${i + 1}">
                <input type="url" placeholder="URL da imagem" class="url-resposta-${i + 1}">
                <h3>Respostas incorretas</h3>
                <input type="text" placeholder="Resposta incorreta 1" class="resposta-incorreta1-${i + 1}">
                <input type="url" placeholder="URL da imagem 1" class="url-resposta-incorreta1-${i + 1}">
                <input type="text" placeholder="Resposta incorreta 2" class="resposta-incorreta2-${i + 1}">
                <input type="url" placeholder="URL da imagem 2" class="url-resposta-incorreta2-${i + 1}">
                <input type="text" placeholder="Resposta incorreta 3" class="resposta-incorreta3-${i + 1}">
                <input type="url" placeholder="URL da imagem 3" class="url-resposta-incorreta3-${i + 1}">
            </div>
        `
    }
    perguntas.innerHTML += `
    <button onclick="validaPerguntas()">Prosseguir para criar níveis</button>
    `
}

function validaNiveis() {
    /*FUNÇÃO QUE FAZ A VALIDAÇÃO DOS NIVEIS CONFORME REQUISITOS
        funcão chamada no botao de finalizar quizz, verifica se todas as informações atenderam os requisitos de criação dos niveis*/
    for (let i = 0; i < qtdNiveis; i++) {
        tituloNivel[i] = document.querySelector(`.titulo-nivel-${i + 1}`).value;
        porcentagens[i] = Number(document.querySelector(`.porcentagem-nivel-${i + 1}`).value);
        imagens[i] = document.querySelector(`.imagem-nivel-${i + 1}`).value;
        descricao[i] = document.querySelector(`.descricao-nivel-${i + 1}`).value;
        valida[i] = '';
        if (porcentagens[i] === 0) {
            minima0 = porcentagens[i];
        }
    }
    for (let i = 0; i < qtdNiveis; i++) {
        if (ehNivelValido()) {
            valida[i] = true;
        }
    }
    result = valida.every((e) => e === true); /* Percorre todo o array 'valida' e compara se todos os elementos são true, caso sim retorna verdadeiro*/

    if (result === true) {
        paginaNiveis.classList.add("escondido");
    } else {
        alert("Preencha os dados corretamente");
    }
}

function validaPerguntas() {
    for (let i = 0; i < qtdPerguntas; i++) {
        textoPergunta[i] = document.querySelector(`.texto-pergunta-${i + 1}`).value;
        corPergunta[i] = document.querySelector(`.cor-fundo-pergunta-${i + 1}`).value;
        respostaCorreta[i] = document.querySelector(`.resposta-correta-${i + 1}`).value;
        respostaIncorreta1[i] = document.querySelector(`.resposta-incorreta1-${i + 1}`).value;
        respostaIncorreta2[i] = document.querySelector(`.resposta-incorreta2-${i + 1}`).value;
        respostaIncorreta3[i] = document.querySelector(`.resposta-incorreta3-${i + 1}`).value;
        urlResposta[i] = document.querySelector(`.url-resposta-${i + 1}`).value;
    }
    if(ehPerguntaValida()){
        paginaCriacao2.classList.add("escondido");
        paginaNiveis.classList.remove("escondido");
        insereNiveis();
    } else {
        alert("Preencha os dados corretamente");
        }

    console.log(textoPergunta,corPergunta,respostaCorreta,respostaIncorreta1,respostaIncorreta2,respostaIncorreta3, urlResposta)

    }
