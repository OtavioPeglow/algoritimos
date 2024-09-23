const prompt = require("prompt-sync")();
const nomes = ['Ana', 'João', 'Pedro'];

const objetoNomes = nomes.reduce((acumulador, nome) => {
    acumulador[nome] = nome.length;
    return acumulador;
}, {});
console.log(objetoNomes);
