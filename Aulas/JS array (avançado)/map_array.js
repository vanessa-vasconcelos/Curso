// Dobre os valores
// O array do map sempre vai ter o mesmo tamanho original

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosDobro = numeros.map(valor => valor * 2);
// console.log(numerosDobro);

// Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada obejto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));

// const comIds = pessoas.map(function(obj, indice) {
//     obj.id = (indice + 1) * 100;
//     return obj
//     // ele mexe no objeto original
// })

const comIds = pessoas.map(function(obj, indice) {
    const novoObjeto = {...obj}; // copiando o objeto pessoas
    novoObjeto.id = indice;
    return novoObjeto
})
console.log(comIds);