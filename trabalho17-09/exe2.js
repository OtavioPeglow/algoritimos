const PromptSync = require("prompt-sync")();
const numeros = [1, 7, 2, 5, 9];

console.log(`Ordem original: ${numeros}`);

numeros.sort((a, b) => a - b);

console.log(`Ordem crescente: ${numeros}`);
