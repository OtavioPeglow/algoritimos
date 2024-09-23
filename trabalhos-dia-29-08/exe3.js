const prompt = require("prompt-sync")();

const mes1 = parseFloat(prompt("Quanto você vendeu no primeiro mês ?"))
const mes2 = parseFloat(prompt("Quanto você vendeu no segundo mês?"))
const mes3 = parseFloat(prompt("Quanto você vendeu no terceiro mês?"))

const soma = mes1 + mes2 + mes3

let comissao;

if (soma < 5000){
    comissao = 0;
} else if (soma <= 10000){
    comissao = soma * 0.05
}else {
    comissao = soma * 0.10
};
console.log(`A comissao total é de: R$${comissao.toFixed(2)}`)