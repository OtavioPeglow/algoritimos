const prompt = require("prompt-sync")();
const produtos = [
    { nome: 'Produto 1', preco: 100 },
    { nome: 'Produto 2', preco: 200 },
    { nome: 'Produto 3', preco: 300 }
];

const produtosComDesconto = produtos.map(produto => ({
    nome: produto.nome,
    preco: produto.preco * 0.9 // Aplica 10% de desconto
}));
console.log(produtosComDesconto);
