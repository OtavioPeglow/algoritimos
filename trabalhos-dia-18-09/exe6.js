const prompt = require("prompt-sync")();
const produtos = [
    { nome: 'Produto 1', preco: 50 },
    { nome: 'Produto 2', preco: 150 },
    { nome: 'Produto 3', preco: 200 }
];

const totalPreco = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
console.log(totalPreco);
