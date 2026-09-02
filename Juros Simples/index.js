let capital = parseFloat(prompt("Capital:"));
let juros = parseFloat(prompt("Juros(%):"));
let tempo = parseFloat(prompt("Tempo (meses):"));

let jurossimples = capital * (juros / 100) * tempo;

console.log(`O Juros é de R$ ${jurossimples.toFixed(2)}`);