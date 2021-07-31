/*
Desafio
Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km) e o total de combustível consumido (em litros).

Entrada
Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km), e um valor real Y que representa o total de combustível consumido, com um dígito após o ponto decimal.

Saída
Exiba o valor que representa o consumo médio do automóvel (3 casas após a vírgula), incluindo no final a mensagem "km/l".
*/

let distancia = parseInt(gets());
let consumo = parseFloat(gets());

var consumoMedio = 0;

if(consumo != 0){
  consumoMedio = parseFloat(distancia / consumo).toFixed(3);
  print(consumoMedio + " km/l");
}