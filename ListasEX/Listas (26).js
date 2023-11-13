//26º Substitua todos os elementos negativos em um array por zero usando o método map.
const numeros = [-1, 2, 3, -4];

const multi = numeros.map((element) => (element < 0) ? 0: element);
console.log(multi);