//11º Remova elementos duplicados de um array usando o método filter.
const numbers = [1, 2, 5, 11, 12, 15, 1,  2, 5, 11, 12];
const resultado = numbers.filter((a,b) => numbers.indexOf(a) == b);
console.log(resultado);
