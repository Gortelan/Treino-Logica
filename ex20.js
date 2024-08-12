//Faça um algoritmo que receba um valor inteiro e imprima na tela a sua tabuada.

function tabuada(n) {
    console.log(`Tabuada do ${n}`);
    for (let n2 = 1; n2 <= 10; n2++) {
        console.log(`${n}x${n2} = ${n * n2}`);
    }

}
tabuada(2);