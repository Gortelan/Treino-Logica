// Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto Sara tem 1,10m e cresce 3
// centímetros por ano. Faça um algoritmo que calcule e imprima na tela em quantos anos serão necessários para que Sara seja maior que Francisco.

function calc() {
    let francisco = 1.50;
    let sara = 1.10;

    for (i = 0; sara <= francisco; i++) {
        sara += 0.03;
        francisco += 0.02;
    }

    console.log(`Serão necessarios ${i} anos para Sara ser maior que Francisco`);
}
