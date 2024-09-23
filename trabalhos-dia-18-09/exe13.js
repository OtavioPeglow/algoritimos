const prompt = require("prompt-sync")();
const pessoas = [
    { nome: 'Ana', idade: 28 },
    { nome: 'João', idade: 32 },
    { nome: 'Pedro', idade: 25 }
];

const listaFormatada = pessoas.map(pessoa => `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);

console.log(listaFormatada);
