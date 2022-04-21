const paginaCriacao1 = document.querySelector(".criacao-informacoes");
/* FUNÇÃO DO BOTÃO QUE CRIA NOVOS QUIZZES
    ao clicar muda a página para de criação */
function criarQuizz() {
    botao = document.querySelector(".nenhum-quizz");
    botao.classList.add("escondido");
    
    paginaCriacao1.classList.remove("escondido");
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