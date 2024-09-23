const prompt = require("prompt-sync")();
const per = parseFloat(prompt(`Digite o tamanho do vetor: `))
const numeros = [];

for (let i = 0; i < per; i++) {
    const numero = parseFloat(prompt(`Digite a nota: ${i + 1}: `))
    numeros.push(numero);
}
let soma = 0;
for (let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}
const media = soma / numeros.length;
console.log(`A media é: ${media}`);