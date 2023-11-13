// Verifique se todos os elementos de um array são strings usando o método every.
const stringVerify = (currentValue) => typeof(currentValue) ==="string";

const frango = ["Peito", "Asa", "Coxa", "Cabeça"];

if (frango.every(stringVerify)) {
    console.log("Todos os elementos são strings");    
}else{
    console.log("Nem todos os elementos são strings");
}
