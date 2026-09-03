let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"));
let n3 = parseInt(prompt("Digite o terceiro número:"));
let n4 = parseInt(prompt("Digite o quarto número:"));

if (n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0) {
    console.log("Erro: não são permitidos números negativos.");
} else if (n3 === n1 + n2 && n4 === n2 + n3) {
    console.log("Os números formam uma sequência de Fibonacci válida!");
} else {
    console.log("Os números NÃO formam uma sequência de Fibonacci válida.");
}
