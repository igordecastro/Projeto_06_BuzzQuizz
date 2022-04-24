/* FUNÇÃO DO BOTÃO QUE CRIA QUIZZES
    ao clicar muda a página para de criação */
function criarQuizz() {

    botao = document.querySelector(".nenhum-quizz");
    botao.classList.add("escondido");
    //depois de criar a página de criação fazer com que ela apareça nessa função
}
//
//FUNÇÃO QUE MUDA A PÁGINA AO CLICAR NO QUIZZ//
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