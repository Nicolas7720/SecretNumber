const listaDeNumerosEscolhidos = []
const numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial()

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice
}

function exibirMensagemInicial() {
    
    exibirTextoNaTela('h1', 'Jogo do Número Secreto')
    exibirTextoNaTela('p', `Escolha um Número de 1 á ${numeroLimite}`)
}

function verificarChute() {
    const chute = document.querySelector('.container__input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');

        const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        exibirTextoNaTela('p', `Parabéns, você acertou o Número Secreto com ${tentativas} ${palavraTentativa}.`);
        document.querySelector('#reiniciar').removeAttribute('disabled')
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', `O Número Secreto é Menor que ${chute}`);
    } else {
        exibirTextoNaTela('p', `O Número Secreto é Maior que ${chute}`);
    }
    tentativas++
    limparCampo()

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantdadeDeElementosDaLista = listaDeNumerosEscolhidos.length;
    if (quantdadeDeElementosDaLista == numeroLimite){
        listaDeNumerosEscolhidos = [];
    }
    if (listaDeNumerosEscolhidos.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosEscolhidos.push(numeroEscolhido);
        return numeroEscolhido
    }
}

function limparCampo() {
    const chute = document.querySelector('.container__input')
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    exibirMensagemInicial()
    tentativas = 1
    document.querySelector('#reiniciar').setAttribute('disabled', true)

}
