//Faça um algoritmo que efetue o cálculo do salário líquido de um professor.
//As informações fornecidas serão: valor da hora aula, número de aulas lecionadas no mês e percentual de desconto do INSS. Imprima na tela o salário líquido final.

function salary(hourValue, lessonPerMonth, discount) {
    discount = discount / 100;
    const discount1 = (hourValue * lessonPerMonth) * discount;
    console.log(`Salario: ${(hourValue * lessonPerMonth) - discount1}`);
}

salary(20, 30, 5);