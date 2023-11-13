//23º Verifique se um array inclui um determinado valor usando o método includes.
const numeros = [1, 2, 3, 5];
if (numeros.includes(2)) {
    console.log(`O Array Inclui o Numero ${numeros[numeros.indexOf(2)]}`);
}else{
    console.log("O Array Não inclui o numero");
}