alert("Bem-Vindo ao Jogo Número Secreto!");

const numMaximo = 500
const numeroSecreto = parseInt(Math.random() * numMaximo + 1);
console.log(`${numeroSecreto}`)
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numMaximo}`);

    if (chute == numeroSecreto) {
        break
    } else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`)
        } else{
            alert(`O número secreto é maior que ${chute}`)
        }
        tentativas ++
    }
}
const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) em ${tentativas} ${palavraTentativa}.`)