const prompt = require("prompt-sync")();
const numeroCartao = prompt("Digite o número do cartão de crédito (16 dígitos):");

if(numeroCartao.length === 16){

    const primeiroDigito = numeroCartao[0]

    if(primeiroDigito === '4'){
    console.log(`Cartão válido: Visa.`)
    }else if(primeiroDigito === '5'){
    console.log(`Cartão válido: Mastercard.`)
    }else if(primeiroDigito === '6'){
    console.log(`Cartão válido: Discover.`)
    }else{
    console.log(`Número de cartão inválido: deve começar com 4, 5 ou 6.`)
    }
}else{
    console.log(`Número de cartão inválido: deve ter 16 dígitos.`)
}