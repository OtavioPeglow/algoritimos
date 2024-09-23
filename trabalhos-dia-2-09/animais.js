const prompt = require("prompt-sync")();
const animal = prompt("Digite o nome de um animal:").toLowerCase();

let classificacao;

switch (animal) {

    case "cachorro":
    case "coala":
    case "diabo-da-tasmania":
    case "rato":
    case "elefante":
    classificacao = "Mamífero";
    break;

    case "águia":
    case "cacatua":
    case "avestruz":
    case "pinguim":
    case "arara-azul":
    classificacao = "Ave";
    break;

    case "cobra":
    case "jacaré":
    case "iguana":
    case "Dragão de comodo":
    case "crocodilo":
    classificacao = "Réptil";
    break;

    case "Salamandra-de-fogo":
    case "rã":
    case "Sapo-comum":
    case "salamandra-tigre":
    case "Rã-touro-americana":
    classificacao = "Anfíbio";
    break;

    case "palhaço":
    case "traira":
    case "baiacu":
    case "pintado":
    case "linguado":
    classificacao = "Peixe";
    break;

    default:
    classificacao = "Desconhecido";
}

console.log(`O animal: ${animal} é um: ${classificacao}`)