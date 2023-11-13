//27º Gere um novo array que contenha apenas as strings de um array original usando o método filter.
const nomes = ["Uno", "Celta", "Opala 67", 0 , 10, 200];
const onlyStrings = nomes.filter((element)=> typeof(element) === "string")
console.log(onlyStrings);
