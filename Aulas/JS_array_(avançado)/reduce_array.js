// Some todos os números (reduce);
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor; 
//     return acumulador // sempre tem que retornar um valor para o acumulador
// });

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor) {
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador // sempre tem que retornar um valor para o acumulador
// }, []);

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2)
    return acumulador // sempre tem que retornar um valor para o acumulador
}, []);
// console.log(total)


// Retorne a pessoas mais velha

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 70},
    {nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);