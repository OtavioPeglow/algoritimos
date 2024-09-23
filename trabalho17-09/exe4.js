const PromptSync = require("prompt-sync");

const numeros = [37, 2, 5, 7, 10, 20];
    console.log(`Ordem original: ${numeros}`);
const par = numeros.filter(num => num % 2 === 0);
    console.log(`Numeros pares: ${par}`);