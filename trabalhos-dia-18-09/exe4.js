const prompt = require("prompt-sync")();
const produtos = [
    { nome: 'Produto 1', preco: 50, categoria: 'Acessórios' },
    { nome: 'Produto 2', preco: 150, categoria: 'Eletrônicos' },
    { nome: 'Produto 3', preco: 200, categoria: 'Acessórios' },
    { nome: 'Produto 4', preco: 80, categoria: 'Móveis' }
];

const contagemCategorias = produtos.reduce((acumulador, produto) => {
    acumulador[produto.categoria] = (acumulador[produto.categoria] || 0) + 1;
    return acumulador;
}, {});
console.log(contagemCategorias);
