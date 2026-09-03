let num1 = parseFloat(prompt("Digite um número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operaçao = prompt("Digite a operação (+,-,x,/)");

switch (operaçao) {
    case "+":
        resultado = num1 + num2;
        console.log(`${resultado.toFixed(2)}`);
        break;
    
    case "-":
        resultado = num1 - num2;
        console.log(`${resultado.toFixed(2)}`);
        break;
    
    case "x":
        resultado = num1 * num2;
        console.log(`${resultado.toFixed(2)}`);
        break;
    
    case "/":
        if ( num1 && num2 !== 0){
            resultado = num1 / num2;
            console.log(`${resultado.toFixed(2)}`);
        } else {
            console.log("0");
        }
        break;
    
    default:
        console.log("Valor Inválido");
}
