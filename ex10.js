//Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.

function sum(n1, n2, n3) {
    const average = (n1 + n2 + n3) / 3;
    console.log(average.toFixed(2));
}

sum(1, 5, 7);