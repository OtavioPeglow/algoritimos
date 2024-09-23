let matriz = [
    [1,1,1],
    [1,1,1],
    [1,1,1]
];

let soma = 0;

for(let i = 0; i < matriz.length; i++) {
    for( let j = 0; o < matriz[i].length; j++) {
        soma += matriz[i][j];
    }
}
console.log(`A soma de todos os numeros na matriz é igual a: ${soma}`);