// Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores.

function ex(a, b) {
    const newValue = a;
    a = b;
    b = newValue;
    console.log(a, b);
}

ex(4, 6);