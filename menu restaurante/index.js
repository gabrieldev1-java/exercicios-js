let menu = parseInt(prompt("Escolha uma Opção: (1)Hamburguer (2)Pizza (3)Salada"));

switch (menu) {
    case 1:
        preço = 40
        console.log(`O preço do Hamburguer é de R$ ${preço.toFixed(2)}`);
        break;

    case 2:
        preço = 60
        console.log(`o Preço da Pizza é de R$ ${preço.toFixed(2)}`);
        break;
        
    case 3:
        preço = 20
        console.log(`O Preço da Salada é de R$ ${preço.toFixed(2)}`);
        break;
        
    default:
        console.log("Valor Inválido");
            
}