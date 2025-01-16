alert("Boas vindas ao jogo do número secreto");
var limiteInfSelecao = 1;
console.log("Limite inferior = " + limiteInfSelecao);
var limiteSupSelecao = parseInt(Math.random() * 1000) + 1;
console.log("Limite Superior = " + limiteSupSelecao);
var numeroSecreto = parseInt(Math.random() * limiteSupSelecao) + 1;
console.log("numero secreto = " + numeroSecreto);

var numeroEscolhido;
var tentativas = 1;

while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = prompt("Escolha um número entre " + limiteInfSelecao + " e " + limiteSupSelecao);
    if (numeroEscolhido == numeroSecreto) {
        break;
    } else {
        //tentativas = tentativas + 1;
        tentativas++;
        if (numeroEscolhido < limiteInfSelecao) {
            alert(`O numero escolhido ${numeroEscolhido} é menor que o limite de seleção inferior de ${limiteInfSelecao}, tente novamente`);
        } else {
            if (numeroEscolhido < numeroSecreto) {
                alert("Número errado!! Tente novamente");
                alert(`O numero escolhido ${numeroEscolhido} é menor que o secreto, tente novamente`);

            } else {
                if (numeroEscolhido <= limiteSupSelecao) {
                    alert("Número errado!! Tente novamente");
                    alert(`O numero escolhido ${numeroEscolhido} é maior que o secreto, tente novamente`);
                } else {
                    alert(`O numero escolhido ${numeroEscolhido} é maior que o limite de seleção superior de ${limiteSupSelecao}, tente novamente`);
                }
            }
        }
    }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai!! Você descobriu o ${numeroSecreto} e precisou de ${tentativas} ${palavraTentativa}!`);
