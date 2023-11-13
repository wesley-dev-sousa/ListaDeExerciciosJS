//4º Utilize o método reduce para calcular a média de um array de números.
const numeros = [10, 20, 30, 40];

const soma = numeros.reduce(
    ((a,b) => a + b)
)/numeros.length;
console.log(soma);