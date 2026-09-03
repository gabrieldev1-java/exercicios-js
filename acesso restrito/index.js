const SENHA_CORRETA = "1234";

let senha = prompt("Digite a senha:");
let digitalOk = confirm("A digital foi reconhecida?)");

if (senha === SENHA_CORRETA && digitalOk) {
    alert("Porta aberta");
} else {
    alert("Acesso negado");
}