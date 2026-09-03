let a = parseFloat(prompt("Digite um valor:"));
let b = parseFloat(prompt("Digite um Valor:"));
let c = parseFloat(prompt("Digite um valor:"));

if (a+b > c && a+c > b && b+c > a) {
    let tipo;
    if (a === b && b === c) {
        tipo = "equilatero";
    }else if (a === b || a === c || b === c) {
        tipo = "isosceles";
    }else {
        tipo = "escaleno"
    }
    console.log(`Forma um triangulo: ${tipo}`);
} else {
    console.log("Não forma um triangulo");
}