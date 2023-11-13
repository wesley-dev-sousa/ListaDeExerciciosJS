//6º Crie uma função que utiliza const para declarar uma constante internamente e tenta modificá-la. O que acontece?

function soma() {
    const num = 8;
    console.log(num);
}
soma();
num = 4;
console.log(num);
//Mesmo a const, pode ser modificada fora de uma function
