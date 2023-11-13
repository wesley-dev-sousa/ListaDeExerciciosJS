//33º Encontre o menor valor em um array de números usando o método reduce.
const numeros = [ 2, 3, 4, 5, 6];
const menorValor = numeros.reduce((menor,atual)=> (atual < menor)? atual:menor)
console.log(menorValor);