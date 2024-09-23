const prompt = require("prompt-sync")();

let num = Number(prompt("Informe um número: "));
let resultado = 1;

for(let i = 1; i <= num; i++){
    resultado *= i; 
}
console.log(`O resultado do fatorial de ${num} é: ${resultado}.`)