//19º Inverta a ordem de caracteres em uma string.
var carro = "Uno Rebaixado Com Escada Em Cima"
var transformArray = carro.split("");
console.log(transformArray);
var reverseArray = transformArray.reverse(); 
console.log(reverseArray);
var joinArray = reverseArray.join(""); 
console.log(joinArray);
