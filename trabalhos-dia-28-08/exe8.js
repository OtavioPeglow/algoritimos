const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número (0 a 100): "));

if (numero >= 0 && numero <= 100) { // Verifica se o número está no intervalo válido
    let primo = true;

    if (numero < 2) {
        primo = false; // Números menores que 2 não são primos
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                primo = false; // Se for divisível, não é primo
                break;
            }
        }
    }

    if (primo) {
        console.log(`O número ${numero} é primo.`);
    } else {
        console.log(`O número ${numero} não é primo.`);
    }
} else {
    console.log("Por favor, insira um número válido entre 0 e 100.");
}
