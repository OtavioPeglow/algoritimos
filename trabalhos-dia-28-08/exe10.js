const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Digite o peso do pacote em kg: "));
let modalidade = prompt("Selecione a modalidade de envio (padrão, expresso, internacional): ").toLowerCase();
let valorFrete;

if (peso > 0) { // Verifica se o peso é um número válido
    if (modalidade === "padrão") {
        valorFrete = peso * 10; // Exemplo: R$10 por kg
    } else if (modalidade === "expresso") {
        valorFrete = peso * 20; // Exemplo: R$20 por kg
    } else if (modalidade === "internacional") {
        valorFrete = peso * 30; // Exemplo: R$30 por kg
    } else {
        console.log("Modalidade de envio inválida. Escolha entre padrão, expresso ou internacional.");
    }

    if (valorFrete) {
        console.log(`O valor do frete para a modalidade ${modalidade} é: R$${valorFrete.toFixed(2)}`);
    }
} else {
    console.log("Por favor, insira um peso válido.");
}
