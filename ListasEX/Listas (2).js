//2º Some todos os elementos de um array usando o método reduce.

const numeros = [10, 20, 30, 40];

const soma = numeros.reduce(
    (a,b) => a + b
);
console.log(soma);