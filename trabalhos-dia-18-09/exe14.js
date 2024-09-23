const prompt = require("prompt-sync")();
const produtos = [
    { nome: 'Produto 1', preco: 30 },
    { nome: 'Produto 2', preco: 70 },
    { nome: 'Produto 3', preco: 50 },
    { nome: 'Produto 4', preco: 100 }
];

const produtosAgrupados = produtos.reduce((acumulador, produto) => {
    if (produto.preco > 50) {
        acumulador.acimaDe50.push(produto);
    } else {
        acumulador.ate50.push(produto);
    }
    return acumulador;
}, { acimaDe50: [], ate50: [] });

console.log(produtosAgrupados);
