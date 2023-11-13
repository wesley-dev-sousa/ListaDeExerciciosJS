//25º Remova elementos de um array com base em uma condição usando o método filter.
const numbers = [1, 2, 5, 11, 12, 15, 1,  2, 5, 11, 12];
const resultado = numbers.filter((a,b) =>  (a/b) == 2);
console.log(resultado);