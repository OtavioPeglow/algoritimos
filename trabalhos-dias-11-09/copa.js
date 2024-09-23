const prompt = require("prompt-sync")();

let ano;

do {
    ano = Number(prompt("Informe um ano (0 para sair): "));
    if (ano === 0) {
        console.log("Encerrando o programa.");
        break;
    }
    if (ano >= 1930 && (ano - 1930) % 4 === 0 && ano !== 1942 && ano !== 1946) {
        console.log(`O ano ${ano} foi ou será ano de Copa do Mundo!`);
    } else {
        console.log(`O ano ${ano} não foi ano de Copa do Mundo.`);
    }
} while (ano !== 0);