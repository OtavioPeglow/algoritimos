const prompt = require("prompt-sync")();
const palavra = prompt("Informe uma palavra: ");
const letra = prompt("Informe a letra que deseja contar: ");

let contador = 0;

for(let i = 0; i < palavra.length; i++){
    if(palavra[i] === letra){
        contador++
    }
}
console.log(`A letra "${letra}" aparece ${contador} vezes na palavra "${palavra}".`)