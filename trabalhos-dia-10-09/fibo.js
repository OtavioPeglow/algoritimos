const prompt = require('prompt-sync')();

let num1 = 0;
let num2 = 1;
let count = 10;

console.log(num1);
console.log(num2); 

while (count > 2) { 
    let nextNum = num1 + num2;
    console.log(nextNum);
    num1 = num2;
    num2 = nextNum;

    count--;
}