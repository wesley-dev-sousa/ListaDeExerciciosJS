//9º Declare uma variável com var e outra com let dentro de um bloco if. Tente acessá-las fora do bloco.
if (true) {
    var num = 5;
    let nome = "Ruan";
}

console.log(num);
console.log(nome);
//let não pode ser acessado