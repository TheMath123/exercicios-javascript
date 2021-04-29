
/**
     Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:

    • O menor valor de faturamento ocorrido em um dia do ano;
    • O maior valor de faturamento ocorrido em um dia do ano;
    • Número de dias no ano em que o valor de faturamento diário foi superior à média anual.

    a) Considerar o vetor já carregado com as informações de valor de faturamento.
    b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.
    c) Utilize o algoritmo mais veloz que puder definir.
 
 */
var faturamentos = [123, 4324, 5435, 23, 595, 432, 1054];

const media = numeros =>{ //calcula a média
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    }
    return soma/numeros.length;
}

const menorFaturamento = Math.min(...faturamentos);
const maiorFaturamento = Math.max(...faturamentos);
const mediaAnual = media(faturamentos);

const diasBonanca = [];
var cont = 0;
for (let i = 0; i < faturamentos.length; i++) { //verifica os dias que faturamento foi maior media anual
    if(faturamentos[i] > mediaAnual){
        diasBonanca[cont] = i+1; 
        cont++; 
    }
}

console.log(`
Média Anual é de R$${mediaAnual.toFixed(2)}
MENOR faturamento foi de R$${menorFaturamento}
MAIOR faturamento foi de R$${maiorFaturamento}
Neste dias o faturamento foi maior que a média: ${diasBonanca}
`);
