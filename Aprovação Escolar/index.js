let nota1 = parseFloat(prompt("Primeira nota:"));
let nota2 = parseFloat(prompt("Segunda nota:"));

let media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log(`Aprovado com media de ${media.toFixed(2)}`);
} else {
    console.log(`Reprovado com media de ${media.toFixed(2)}`);
}
