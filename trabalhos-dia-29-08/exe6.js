const prompt = require("prompt-sync")();

let senha = prompt("Digite uma senha: ");

let comprimentoValido = senha.length >= 8;
let temMaiuscula = /[A-Z]/.test(senha);
let temMinuscula = /[a-z]/.test(senha);
let temNumero = /\d/.test(senha);
let temCaractereEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

if (comprimentoValido && temMaiuscula && temMinuscula && temNumero && temCaractereEspecial) {
    console.log("A senha é considerada forte.");
} else {
    console.log("A senha não é forte o suficiente.");
    if (!comprimentoValido) {
        console.log("A senha deve ter pelo menos 8 caracteres.");
    }
    if (!temMaiuscula) {
        console.log("A senha deve conter pelo menos uma letra maiúscula.");
    }
    if (!temMinuscula) {
        console.log("A senha deve conter pelo menos uma letra minúscula.");
    }
    if (!temNumero) {
        console.log("A senha deve conter pelo menos um número.");
    }
    if (!temCaractereEspecial) {
        console.log("A senha deve conter pelo menos um caractere especial (@, #, $, %, etc.).");
    }
}
