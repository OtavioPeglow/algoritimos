const prompt = require('prompt-sync')();

let num = 1;

while(num <= 30){
    if(num % 4 === 0){
        num++;
        continue;
    }
    console.log(`Número: ${num}`)
    num++
}