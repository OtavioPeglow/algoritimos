const prompt = require("prompt-sync")();

let nota = parseFloat(prompt("Digite a nota final (0 a 10): "));

if (nota >= 0 && nota <= 10) { // Verifica se a nota está dentro do intervalo válido
    let conceito;

    if (nota >= 9) {
        conceito = 'A';
    } else if (nota >= 7) {
        conceito = 'B';
    } else if (nota >= 5) {
        conceito = 'C';
    } else if (nota >= 3) {
        conceito = 'D';
    } else {
        conceito = 'E';
    }

    console.log(`O conceito é: ${conceito}`);
} else {
    console.log("Por favor, insira uma nota válida entre 0 e 10.");
}
