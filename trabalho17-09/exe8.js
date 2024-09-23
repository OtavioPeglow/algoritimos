const prompt = require("prompt-sync")();
const numero = [];
const tamanho = parseFloat(prompt("Digite o tamanho do vetor: "))

for (let i = 0; i < tamanho; i++){
    const num = parseFloat(prompt(`Digite um número: `));
    numero.push(num);
}
const elemento = parseFloat(prompt("Digite o elemento que você procura: "));
const achou = numero.includes(elemento);

console.log(achou);