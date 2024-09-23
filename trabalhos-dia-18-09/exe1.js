const prompt = require("prompt-sync")();
const produtos = [
    { nome: "Produto 1", preco: 50, categoria: 'Acessórios' },
    { nome: "Produto 2", preco: 150, categoria: 'Eletrônicos' },
    { nome: "Produto 3", preco: 200, categoria: 'Móveis' }
];

const produtosCaros = produtos.filter(produto => produto.preco > 100);
console.log(produtosCaros);

