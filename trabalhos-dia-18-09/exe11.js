const prompt = require("prompt-sync")();
const produtos = [
    { nome: 'Produto 1', preco: 50, categoria: 'Acessórios' },
    { nome: 'Produto 2', preco: 150, categoria: 'Eletrônicos' },
    { nome: 'Produto 3', preco: 200, categoria: 'Acessórios' },
    { nome: 'Produto 4', preco: 80, categoria: 'Móveis' }
];

const filtrarPorCategoria = (categoria) => {
    return produtos.filter(produto => produto.categoria === categoria);
};

// Exemplo de uso
const produtosAcessorios = filtrarPorCategoria('Acessórios');
console.log(produtosAcessorios);
