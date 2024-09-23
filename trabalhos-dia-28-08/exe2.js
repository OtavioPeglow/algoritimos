const prompt = require("prompt-sync")();

let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");
let operacao = prompt("Digite a operação (+, -, *, /): ");

let resultado;

if (num1 && num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num1 == num1 && num2 == num2) {
        switch (operacao) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    resultado = "Divisão por zero não é permitida.";
                }
                break;
            default:
                resultado = "Operação inválida.";
                break;
        }
    } else {
        resultado = "Por favor, insira números válidos.";
    }
} else {
    resultado = "Por favor, insira ambos os números.";
}

console.log(`Resultado: ${resultado}`);
