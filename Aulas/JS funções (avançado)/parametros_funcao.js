// argumentos que sustenta todos os argumentos enviados
// somente com o nome FUNCTION

// function funcao() {
//     let total = 0;
//     for( let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9)

// function funcao({ nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }
// funcao({nome: 'Luiz', sobrenome: 'Otávio', idade:20})
//  OU
// let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade:20};
// funcao(obj);

function funcao([varlor1, valor2, valor3]) {
    console.log(varlor1, valor2, valor3);
}

funcao(['Luiz', 'Miranda', 30])