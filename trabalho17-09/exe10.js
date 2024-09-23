const prompt = require("prompt-sync")();
const nomes = ["amanda", "diuli", "hugo", "maicon", "wallace", "guilerme", "rafael", "daniela", "rosimere", "cibele"];

let procurar = prompt("Digite o nome que você procura: ");

if (nomes.includes(procurar)) {
    console.log("Achei");
}else{
    console.log("Não achei");
}
