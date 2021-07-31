/*
Desafios
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada
Você receberá 1 valor inteiro N, onde N > 0.

Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 
*/

entrada = parseInt(gets());
var result = 0;

for (let num = 1; num <= entrada; num++) {
  if (num % 2 == 0){
  console.log(num);
  }
}