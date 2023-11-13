//29º Encontre o índice do primeiro elemento que atenda a uma condição usando o método findIndex.
const nomes = ["Uno", "Celta", "Opala 67", 0 , 10, 200];

var numero1 = nomes.findIndex(((element)=>(typeof(element) === "number")));
console.log(numero1);