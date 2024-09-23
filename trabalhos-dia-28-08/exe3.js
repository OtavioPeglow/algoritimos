const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Digite a Nota 1 (0 a 10): "));
let nota2 = parseFloat(prompt("Digite a Nota 2 (0 a 10): "));
let nota3 = parseFloat(prompt("Digite a Nota 3 (0 a 10): "));

let resultado;

if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
    let media = (nota1 + nota2 + nota3) / 3;

    if (media < 4) {
        resultado = "Reprovado";
    } else if (media >= 4 && media < 7) {
        resultado = "Recuperação";
    } else {
        resultado = "Aprovado";
    }
} else {
    resultado = "Por favor, insira notas válidas entre 0 e 10.";
}

console.log(`Situação do Aluno: ${resultado}`);
