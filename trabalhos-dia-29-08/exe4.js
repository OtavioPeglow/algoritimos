const prompt = require("prompt-sync")();

const nota1 = parseFloat(prompt("Qual é a primeira nota?"));
const nota2 = parseFloat(prompt("Qual é a segunda nota?"));
const nota3 = parseFloat(prompt("Qual é a terceira nota?"));
let media1 = (nota1 + nota2 + nota3) / 3;


if (media1> 85){
    media1 += 5;
} else if (media1 <= 85 && media1 >= 70){
    media1 += 3;
} else