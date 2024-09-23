const prompt = require("prompt-sync")();

const idade = Number(prompt("Informe sua idade: "));

let categoria;

switch(true){
    case(idade >= 0 && idade <= 12):
    categoria = "Criança";
    break;
    case(idade >= 13 && idade <= 17):
    categoria = "Jovem";
    break;
    case(idade >= 18 && idade <= 64):
    categoria = "Adulto";
    break;
    case(idade >= 65):
    categoria = "Velho";
    break;
    default:
    categoria = "Idade inválida"
}

console.log(`Sua idade esta na categoria: ${categoria}`)