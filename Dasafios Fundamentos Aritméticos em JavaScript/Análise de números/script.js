/*
Desafio
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.
*/

numero = Array(5);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();

var pares = numero.filter(par => (par % 2) == 0);
//console.log(pares);

var impares = numero.filter(impar => (impar % 2) != 0);
//console.log(impares);

var positivos = numero.filter(positivo => (positivo) > 0);
//console.log(positivos);

var negativos = numero.filter(negativo => (negativo) < 0);
//console.log(negativos);

print(pares.length + " valor(es) par(es)");
print(impares.length + " valor(es) impar(es)");
print(positivos.length + " valor(es) positivo(s)");
print(negativos.length + " valor(es) negativo(s)");