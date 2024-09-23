const prompt = require('prompt-sync')();
const cores = ["rosa", "vermelho", "verde", "azul"];
const cor = prompt("Digite uma cor: ");
const indice = cores.indexOf(cor);

if (indice !== -1) {
    console.log(`A cor ${cor} está na posição ${indice} do vetor.`);
} else {
    console.log("A cor não foi encontrada.");
}