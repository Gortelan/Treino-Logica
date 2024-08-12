// Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

function evenOrOdd(n) {
    const result = n % 2 === 0 ? 'par' : 'ímpar'
    console.log(result);
    console.log(n >= 0 ? 'positivo' : 'negativo');

    // const positiveOrNegative = isFinite(n) ? 'positivo' : 'negativo'
    // console.log(positiveOrNegative);
}

evenOrOdd(0); 