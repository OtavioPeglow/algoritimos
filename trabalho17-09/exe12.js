let matriz = [
    [12,2],
    [32,4],
    [7,62]
];
console.log(matriz);

let maior = matriz[0][0];

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        if (matriz[i][j] > maior){
            maior = matriz[i][j];
        }
    }
}
console.log(maior)