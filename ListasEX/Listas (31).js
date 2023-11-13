//31º Modifique um array multiplicando cada elemento por sua posição (índice) usando o método map.
const numeros = [1, 2, 3, 4];

const multi = numeros.map((element) => element * numeros.indexOf(element));
console.log(multi);