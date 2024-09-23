const prompt = require("prompt-sync")();
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const resultado = [];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const numero = matriz[i][j];
        if (numero % 2 === 0) {
            resultado.push(numero * 3); // Multiplica por 3 e adiciona ao resultado
        }
    }
}

console.log(resultado);
