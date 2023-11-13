//14º Verifique se todos os elementos de um array são maiores que zero usando o método every.
const maiorQueZero = (currentValue) => currentValue > 0;

const numeros = [-1, 30, 39, -29, 10, 13];

if (numeros.every(maiorQueZero)) {
    console.log("Todos os numeros são maiores que zero");
}else{
    console.log("Nem todos os numeros são maiores que zero");
}