//5º Verifique se há algum elemento ímpar em um array usando o método some.
const numeros = [1, 2, 3, 4];

// Checks whether an element is even
const verifique = (element) => element % 2 != 0;
if (numeros.some(verifique) == true) {
    console.log("Existem numeros impares no Array");
} else {
    console.log("Não existem numeros impares no Array");
}