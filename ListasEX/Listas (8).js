//8º Encontre o maior elemento em um array usando o método reduce.
const numeros = [10, 20, 30, 40 , 100, 15];

const soma = numeros.reduce(
    ((a,b) => Math.max(a,b))
);
console.log(soma);