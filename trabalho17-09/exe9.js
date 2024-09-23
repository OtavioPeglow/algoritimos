const prompt = require("prompt-sync");
let vezes = 10;
let tamanho = [];

for (let i = 0; i < vezes; i++) {
    if (i % 2 === 0) {
        tamanho[i] = "Par";
    } else {
        tamanho[i] = "Ímpar"; 
    }
}
console.log(tamanho);
