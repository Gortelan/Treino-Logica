//Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas, imprima na tela o nome do aluno e
//se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7.

function passOrNot(nome, n1, n2, n3, n4) {
    const average = (n1 + n2 + n3 + n4) / 4;
    console.log(`${nome} foi ${average >= 7 ? 'Aprovado' : 'Reprovado'}`);
}

passOrNot('Gabriel', 5, 8, 8, 7);