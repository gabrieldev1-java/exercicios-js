let peso = parseFloat(prompt("Seu Peso:"));
let altura = parseFloat(prompt("Sua Altura:"));

let imc = peso / (altura * altura);

console.log(`Seu IMC é de: ${imc.toFixed(2)}`);