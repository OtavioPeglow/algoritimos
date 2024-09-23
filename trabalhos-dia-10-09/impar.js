const prompt = require('prompt-sync')();

let soma = 0;

let num = 1;

while(num <= 50){
    if(num % 2 !== 0){
        soma += num;
    }
    num++
}
console.log(`A soma dos números ímpares de 1 a 50 é: ${soma}`);