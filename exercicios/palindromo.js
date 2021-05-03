/**
 * Crie um programa para ler um número ou palavra e dizer se é um palindromo.
 */

// let resposta = 'ovo'; //Informe um número ou palavra
// let resposta = '12321';

let letras =[];
letras = resposta.split(''); //Divide o texto ou número em caracteres

let tamanho = letras.length-1; //Anota o tamanho do array
let ePalindromo = true; //Flag se existe se a primeira e ultima letra são iguais

for (let i = 0; i < letras.length; i++) { 
  if(!(letras[i] === letras[tamanho-i])){ //Compara a 1ª carácter com a ultimo
    ePalindromo = false; //Caso não for muda a flag para falso, porque não é um palindromo
  }
}

if(ePalindromo){ //Informa se palavra é ou não um palindromo
  console.log('É um palindromo');
}else{
  console.log('Não é um palindromo');
}