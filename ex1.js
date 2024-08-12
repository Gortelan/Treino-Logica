// Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B e mostre se a soma é menor que C.

function read(a, b, c) {
    const result = a + b;
    console.log(result);
    if (result < c) console.log('A soma entre A e B é menor que C');
}

read(1, 1, 3);