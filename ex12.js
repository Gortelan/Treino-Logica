// Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento
//  pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.

//  Tabela de Código de Condições de Pagamento
//  1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto

//  2 - À Vista no cartão de crédito, recebe 10% de desconto

//  3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros

//  4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%

// Função para calcular 15%
const inCash = (value) => {
    const dinscont = value * 0.15;
    const newValue = value - dinscont;
    console.log(newValue);
    return newValue;
}

//Função para calcular a vista no credito
const cashOnCredit = (value) => {
    const dinscont = value * 0.10;
    const newValue = value - dinscont;
    console.log(newValue);
    return newValue;
}

//Função para calcular parcelado em 2x
const inInstallmentsTwo = (value) => {
    console.log(value);
    return value;
}

//Função para calcular parcelado em 3x
const inInstallmentsThree = (value) => {
    const fees = value * 0.10;
    const newValue = value + fees;
    console.log(newValue);
    return newValue
}

function payment(value, paymentType) {
    switch (paymentType) {
        case 1:
            inCash(value);
            break;
        case 2:
            cashOnCredit(value);
            break;
        case 3:
            inInstallmentsTwo(value);
            break;
        case 4:
            inInstallmentsThree(value);
            break;
        default:
            break;
    }
}

payment(1000, 4);