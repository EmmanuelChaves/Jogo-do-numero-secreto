let listaDeNumerosSorteados = [];
let numeroLimite = 1000;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
        campo.innerHTML= texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

exibirTextoNaTela('h1', 'Jogo do Numero Secreto')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 1000')

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let tentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Acertou o numero secreto');
        exibirTextoNaTela('p', `Em ${tentativas} ${tentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
        exibirTextoNaTela('p','O numero secreto é menor');
    } else{
        exibirTextoNaTela('p','O numero secreto é maior');
    }
    }
    tentativas++;
    limparCampo();   
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;
    
    if(quantidadeDeElementoNaLista == numeroLimite){
        listaDeNumerosSorteados = [];

    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();

    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo (){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 1000');
    document.getElementById('reiniciar').setAttribute('disabled',true);
}