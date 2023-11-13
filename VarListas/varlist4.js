//4º Utilize var para declarar uma variável dentro de um bloco ({}) e tente acessá-la fora desse bloco. Faça o mesmo com let.
var i = 0;
while (i < 1) {
    var soma = 1 + 2;
    console.log(soma);
    let somas = soma + 3;
    console.log(somas);
    i++;    
}
console.log(soma);
console.log(somas);
