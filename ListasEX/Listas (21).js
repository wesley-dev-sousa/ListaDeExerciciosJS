//21º Crie um novo array que contenha apenas os elementos pares de um array original usando o método filter.
const numbers = [1, 2, 5, 11, 12, 15];
const resultado = numbers.filter((elementos) => elementos % 2 == 0);
console.log(resultado);
