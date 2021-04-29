/*
    Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

    SP – R$67.836,43
    RJ – R$36.678,66
    MG – R$29.229,88
    ES – R$27.165,48
    Outros – R$19.849,53

    Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

*/

const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const Outros = 19849.53;

const total = SP + RJ + MG + ES + Outros; //calculando o total

const percentual = estado => { //função de percentual
    return (estado/total)*100;
}

//Calcula o percentual de cada estado
const resp = `Percentual:
SP = ${percentual(SP).toFixed(2)}
RJ = ${percentual(RJ).toFixed(2)}
MG = ${percentual(MG).toFixed(2)}
ES = ${percentual(ES).toFixed(2)}
Outros = ${percentual(Outros).toFixed(2)}`;

console.log(resp);
