const prompt = require("prompt-sync")();
const alunos = [
    { nome: "Otavio", nota: 8 },
    { nome: "João", nota: 6 },
    { nome: "Pedro", nota: 7.5 },
    { nome: "Maria", nota: 5 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota > 7);

console.log(alunosAprovados);

