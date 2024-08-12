//Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa ja viveu. Leve em
//consideração o ano com 365 dias e o mês com 30 dias.
//(Ex: 5 anos, 2 meses e 15 dias de vida) 

function livedTime(date) {
    const year = 2024;
    const month = 6;
    const day = 10
    const livedYears = year - date;
    const livedMonths = 12 - month;
    const livedDays = 30 - day
    console.log(`${livedYears} anos, ${livedMonths} meses e ${livedDays} dias de vida`);
}

livedTime(1999);