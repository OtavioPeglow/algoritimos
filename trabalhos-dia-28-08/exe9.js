const prompt = require("prompt-sync")();

let velocidade = parseFloat(prompt("Digite a velocidade do veículo em km/h: "));

if (velocidade >= 0) { // Verifica se a velocidade é um número válido
    let resultado;

    if (velocidade <= 80) {
        resultado = "O veículo está dentro do limite de velocidade.";
    } else if (velocidade <= 100) {
        resultado = "O veículo está acima do limite. Multa leve.";
    } else {
        resultado = "O veículo está com multa grave.";
    }

    console.log(resultado);
} else {
    console.log("Por favor, insira uma velocidade válida.");
}
