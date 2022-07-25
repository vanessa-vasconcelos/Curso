// const pessoa1 = {
//     nome:'Luiz',
//     sobrenome:'Miranda',
//     idade:25
// };

// console.log(pessoa1.nome);

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade

        // ou
        // nome:nome,
        // sobrenome: sobrenome,
        // idade: idade
    };
}

const pessoa1 = criaPessoa('Mateus', 'Miranda', 25);
const pessoa2 = criaPessoa('Samantha', 'Navia', 55);
console.log(pessoa1.nome, pessoa2.nome);