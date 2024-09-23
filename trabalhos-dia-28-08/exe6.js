const prompt = require("prompt-sync")();

let ano = parseInt(prompt("Digite um ano: "));

if (ano === ano) { // Verifica se a entrada é um número válido
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log(`O ano ${ano} é bissexto.`);
    } else {
        console.log(`O ano ${ano} não é bissexto.`);
    }
} else {
    console.log("Por favor, insira um ano válido.");
}