const prompt = require("prompt-sync")();
const listas = [
    ['Ana', 'João'],
    ['Pedro', 'Maria'],
    ['Lucas', 'Fernanda']
];

const listaConcatenada = listas.reduce((acumulador, lista) => acumulador.concat(lista), []);

console.log(listaConcatenada);
