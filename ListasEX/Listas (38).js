//38º Substitua uma substring em uma string por outra substring.
var carro = "Uno Rebaixado";
const suspensao = carro.substring(4,carro.length)
carro = suspensao.concat(' ',carro.substring(0,4))
console.log(carro);