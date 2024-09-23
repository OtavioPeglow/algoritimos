const prompt = require("prompt-sync")();
let celsius = prompt("Digite a temperatura em graus Celsius: ");

celsius = parseFloat(celsius);

if (celsius === celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`A temperatura em Fahrenheit é: ${fahrenheit}°F`);
} else {
    console.log("Por favor, insira um número válido.");
}