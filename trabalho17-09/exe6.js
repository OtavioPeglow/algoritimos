const prompt = require("prompt-sync")();
const per = parseFloat(prompt(`Digite o tamanho do vetor: `))
const numeros = [];

for (let i = 0; i < per; i++) {
    const numero = parseFloat(prompt(`Digite o número ${i + 1}: `))
    numeros.push(numero);
} 
let maior = numeros[0];
for(let i = 1; i < numeros.length; i++){
    if (numeros[i] > maior){
    }
}
console.log(`O maior numero é: ${maior}`);