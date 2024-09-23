const prompt = require("prompt-sync")();
const pessoas = [
    { nome: 'João', idade: 25, profissao: 'Engenheiro' },
    { nome: 'Maria', idade: 30, profissao: 'Médica' },
    { nome: 'Pedro', idade: 40, profissao: 'Professor' }
];

const totalIdades = pessoas.reduce((acumulador, pessoa) => acumulador + pessoa.idade, 0);

const mediaIdade = totalIdades / pessoas.length;
console.log(mediaIdade);

