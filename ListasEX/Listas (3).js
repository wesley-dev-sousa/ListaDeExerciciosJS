//3º Conte o número de elementos ímpares em um array usando o método filter.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numeros.filter((numerosImpar) => numerosImpar%2 != 0);
soma = 0;
result.forEach(element => {
   soma++
});
console.log(`Existem ${soma} elementos impares no Array numeros, sendo estes: ${result}.`);
