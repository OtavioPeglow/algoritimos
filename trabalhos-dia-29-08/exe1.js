const prompt = require("prompt-sync")(); //faça isso para roda no terminal

const num1 = parseFloat(prompt("Digite o primeiro número: "));    // perguntando quais são os numeros
const num2 = parseFloat(prompt("Digite seu segundo número: "));
const num3 = parseFloat(prompt("Digite seu terceiro número: "))

if (num1 < num2 && num2 < num3){
    console.log(`Isto é uma ordem crescente!`)
}else if (num1 > num2 && num2 > num3){
    console.log(`Isto é uma ordem decrescente!`)
}else {
    console.log(`Isto é uma desordem!`)
};