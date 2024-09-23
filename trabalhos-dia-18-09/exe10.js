const prompt = require("prompt-sync")();
const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 40 },
    { nome: 'Ana', idade: 35 }
];

const pessoaMaisVelha = pessoas.reduce((acumulador, pessoa) => {
    return (acumulador.idade > pessoa.idade) ? acumulador : pessoa;
});

console.log(pessoaMaisVelha);
