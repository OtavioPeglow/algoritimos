const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número inteiro: "));

if (numero === numero) { // Verifica se é um número válido
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par.`);
    } else {
        console.log(`O número ${numero} é ímpar.`);
    }
} else {
    console.log("Por favor, insira um número inteiro válido.");
}
