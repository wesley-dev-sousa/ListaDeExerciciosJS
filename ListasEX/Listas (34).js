//34º Crie um novo array que contenha apenas os elementos distintos de dois arrays usando o método concat e filter.
const numeros = [2, 4, 10];
const numeros1 = [6, 7, 8, 9, 10];

const numeros2 = numeros.concat(numeros1.filter((element)=> {
    if(!numeros.includes(element)){
        return element
    }
}))
console.log(numeros2);