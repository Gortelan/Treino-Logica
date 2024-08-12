// Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.

function descending(n1, n2, n3) {
    const arr1 = [n1, n2, n3];
    arr1.sort((a, b) => a - b);
    arr1.reverse();
    console.log(arr1);
}

descending(1, 5, 4)