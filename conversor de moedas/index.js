let reais = parseFloat(prompt("Digite o Valor em Reais R$:"));

let moeda = parseInt(prompt("Escolha uma Opção para a Conversão: (1)Dólar (2)Euro (3) Peso"));

let valorconvertido;

switch (moeda) {
    case 1:
        valorconvertido = reais / 5.1
        console.log(`R$ ${reais.toFixed(2)} = US$ ${valorconvertido.toFixed(2)}`);
        break;

    case 2:
        valorconvertido = reais / 6;
        console.log(`R$ ${reais.toFixed(2)} = € ${valorconvertido.toFixed(2)}`);
        break;

    case 3:
        valorconvertido = reais / 0.03;
        console.log(`R$ ${reais.toFixed(2)} = $ ${valorconvertido.toFixed(2)}`);
        break;

    default:
        console.log("Valor Inválido");    
}