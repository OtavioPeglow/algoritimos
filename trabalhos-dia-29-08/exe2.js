const prompt = require("prompt-sync")();

const lado1 = parseFloat(prompt("Digite o tamanho do primeiro lado: "));
const lado2 = parseFloat(prompt("Digite o tamanho do segundo lado: "));
const lado3 = parseFloat(prompt("Digite o tamanho do terceiro lado: "));
const lado4 = parseFloat(prompt("Digite o tamanho do quarto lado: "));

if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4){
    console.log("É um quadrado ou um losango");
} else if (lado1 === lado3 && lado2 === lado4){
    console.log("É um retângulo");
} else {
    console.log("Quadrilatero é um outro tipo");
};