let altura = parseFloat(prompt("Digite sua Altura:"));
let peso = parseFloat(prompt("Digite seu Peso:"));

let imc = (peso / altura**2);

if (imc < 18.5) {
    console.log(`Baixo peso com um imc de ${imc.toFixed(2)} `);
} else if (imc < 25) {
    console.log(`Normal com um imc de ${imc.toFixed(2)} `);
} else {
    console.log(`Sobrepeso com um imc de ${imc.toFixed(2)}`);
}