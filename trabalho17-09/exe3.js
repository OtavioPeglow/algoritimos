const PromptSync = require("prompt-sync")();
const numeros = [100, 1, 25, 70, 12];

console.log(numeros);

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++){
    if (numeros[i] > maior){
        maior = numeros[i];
    }
}
console.log(`O maior numero é: ${maior}`)