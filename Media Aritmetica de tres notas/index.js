let nome = prompt("Digite o nome do aluno:");
let nota1 = parseFloat(prompt("nota 1:"));
let nota2 = parseFloat(prompt("nota 2:"));
let nota3 = parseFloat(prompt("nota 3:"));

media = (nota1 + nota2 + nota3) / 3;

console.log(`O aluno ${nome} ficou com média ${media.toFixed(2)}`); 
