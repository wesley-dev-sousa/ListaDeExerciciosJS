//7º Declare uma variável utilizando var fora de uma função e tente acessá-la dentro de uma função. Repita o processo com let.
var num = 5;

function soma() {
    var adicao = num + 5;
    console.log(adicao);
}
soma();
let number = 10;

function subtracao() {
    var sub = number + 5;
    console.log(sub);
}
subtracao();

//let pode ser declarado fora de uma função e ainda ser acessado dentro da função
