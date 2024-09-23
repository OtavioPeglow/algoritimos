const prompt = require("prompt-sync")();

let lado1 = parseFloat(prompt("Digite o comprimento do lado 1: "));
let lado2 = parseFloat(prompt("Digite o comprimento do lado 2: "));
let lado3 = parseFloat(prompt("Digite o comprimento do lado 3: "));

if (lado1 > 0 && lado2 > 0 && lado3 > 0) { // Verifica se os lados são válidos
    let tipoTriangulo;

    if (lado1 === lado2 && lado2 === lado3) {
        tipoTriangulo = "Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        tipoTriangulo = "Isósceles";
    } else {
        tipoTriangulo = "Escaleno";
    }

    console.log(`O triângulo é: ${tipoTriangulo}`);

    // Mostrando uma imagem do triângulo
    if (tipoTriangulo === "Equilátero") {
        console.log("Imagem do triângulo equilátero: [URL da imagem]");
    } else if (tipoTriangulo === "Isósceles") {
        console.log("Imagem do triângulo isósceles: [URL da imagem]");
    } else {
        console.log("Imagem do triângulo escaleno: [URL da imagem]");
    }
} else {
    console.log("Por favor, insira valores válidos para os lados.");
}
