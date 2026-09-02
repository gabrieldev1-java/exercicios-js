let salario = parseFloat(prompt("Seu salário Atual:"));
let percentual = parseFloat(prompt("Percentual de aumento da Empresa:"));

let novo_salario = salario * (1 + percentual / 100);

console.log(`O Novo Salário será de R$ ${novo_salario.toFixed(2)}`);