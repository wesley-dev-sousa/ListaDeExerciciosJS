//37º Encontre a soma dos quadrados dos números em um array usando o método reduce.
const numeros = [1, 2, 3];

const quadrado = numeros.reduce((total, valor) => {
  total.push(valor * valor);
  return total;
}, []);
const total = quadrado.reduce((a,b)=> a += b)
console.log(total);