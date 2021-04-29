
/** 
    Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e indique se o número informado pertence ou não a sequência:

    a) Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
    b) É necessário guardar os números da sequência que estão sendo calculados.

 */

var numeroEscolhido = 55; 
var num = numeroEscolhido;
var sequencia = [];

function fibonacci(num){
    // se o valor passado é ou 0 ou 1, é preciso retornar o valor passado
    if(num < 2) {
        return num
    }
    // aqui entra a recursão propriamente dita
    return fibonacci(num - 1) + fibonacci(num - 2);
}

for (let i = 0; i < numeroEscolhido+2; i++) {
    sequencia[i] =  fibonacci(i); //adicionando o número a vetor de sequencia
    if(sequencia[i] === numeroEscolhido) //verifica se o número digita existe na sequencia
        return console.log(`Numero ${numeroEscolhido}, EXISTE na sequencia de Fibonacci` )
    
}

return console.log(`Numero ${numeroEscolhido}, NÃO existe na sequencia de Fibonacci` );

