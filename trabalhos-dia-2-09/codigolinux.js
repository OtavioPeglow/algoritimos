const prompt = require("prompt-sync")();
const codigo = Number(prompt("Digite o código (1 para carro, 2 para moto): "));

switch (codigo) {
    case 1:
    console.log("Modelo: Ka 1.0\nMarca: Ford\nPeso: 2 toneladas\nTanque: 60 litros\nValor: R$55.000,00");
    break;
    case 2:
    console.log("Modelo: Biz\nMarca: Honda\nPeso: 300 Kg\nTanque: 20 litros\nValor: R$20.000,00");
    break;
    default:
    console.log("Código Inválido");
}

