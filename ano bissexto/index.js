let ano = parseInt(prompt("Digite um ano:"));

const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

if (bissexto) {
     console.log(`${ano} é bissexto`);
} else {
    console.log(`${ano} não é bissexto`);
}