//5º Declare uma variável usando let dentro de um loop for e tente acessá-la fora do loop.
for (let i = 0; i < 1; i++) {
    let soma = 1 + 2;
    console.log(soma);    
}
console.log(soma);
//Fora do bloco, soma não é definido