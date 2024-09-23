const prompt = require("prompt-sync")();

let taxaDolar = 5.25; 
let taxaEuro = 6.10;  

let valorBRL = parseFloat(prompt("Digite o valor em Reais (BRL): "));
let moedaSelecionada = prompt("Digite a moeda para conversão (USD/EUR): ").toUpperCase();
let resultado;

if (valorBRL >= 0) {
    if (moedaSelecionada === "USD") {
        resultado = valorBRL / taxaDolar;
        console.log(`Valor em Dólares: $${resultado.toFixed(2)}`);
    } else if (moedaSelecionada === "EUR") {
        resultado = valorBRL / taxaEuro;
        console.log(`Valor em Euros: €${resultado.toFixed(2)}`);
    } else {
        console.log("Moeda inválida. Escolha entre USD ou EUR.");
    }
} else {
    console.log("Por favor, insira um valor válido.");
}
