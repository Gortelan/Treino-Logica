// Faça um algoritmo que imprima na tela a tabuada de 1 até 10.

function tabuada() {
    for (let n1 = 1; n1 <= 10; n1++) {
        console.log(`Tabuada do ${n1}`);
        for (let n2 = 1; n2 <= 10; n2++) {
            console.log(`${n1}x${n2} = ${n1 * n2}`);
        }
        console.log('');
    }
}
tabuada();