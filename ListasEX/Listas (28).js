//28º Some os valores de uma propriedade específica em um array de objetos usando o método reduce.
const numeros = [1, 2, 3, 4, 5, 6];

console.log(numeros.filter(numero => numero % 2 != 0).reduce((soma, numero)=> soma += numero));