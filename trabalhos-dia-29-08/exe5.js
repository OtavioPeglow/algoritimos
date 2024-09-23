const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Digite seu peso em kg: "));
let altura = parseFloat(prompt("Digite sua altura em metros: "));

if (peso > 0 && altura > 0) { 
    let imc = peso / (altura * altura);
    let categoria;

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        categoria = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        categoria = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        categoria = "Obesidade grau II";
    } else {
        categoria = "Obesidade grau III";
    }

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Categoria: ${categoria}`);
    
    if (categoria === "Abaixo do peso") {
        console.log("Você pode estar em risco de problemas de saúde relacionados à desnutrição.");
    } else if (categoria === "Peso normal") {
        console.log("Você está em um peso saudável. Continue assim!");
    } else if (categoria === "Sobrepeso") {
        console.log("Você pode considerar um estilo de vida mais saudável para evitar problemas futuros.");
    } else if (categoria === "Obesidade grau I" || categoria === "Obesidade grau II") {
        console.log("É recomendável procurar orientação médica para gerenciar seu peso.");
    } else {
        console.log("É muito importante buscar ajuda médica para um plano de tratamento adequado.");
    }
} else {
    console.log("Por favor, insira valores válidos para peso e altura.");
}
