//Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse
//usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20).

function salary(n) {
    const min = 1293.20;
    const result = n / min;
    console.log(`O usuário ganha ${result.toFixed(2)} salarios minimos`);
}

salary(3000);