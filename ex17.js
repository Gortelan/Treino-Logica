// Faça um algoritmo que leia uma temperatura em Fahrenheit e calcule a temperatura correspondente em grau Celsius. Imprima na tela as duas temperaturas.//
// Fórmula: C = (5 * ( F-32) / 9)

function fToC(n) {
    const c = (5 * (n - 32) / 9);
    console.log(`C = ${c.toFixed(2)} F = ${n}`);
}

fToC(20);