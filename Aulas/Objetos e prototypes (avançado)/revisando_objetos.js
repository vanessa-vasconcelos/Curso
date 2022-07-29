// const pessoa = {
//     nome: 'Catarina',
//     sobrenome: 'Souza'
// };
// console.log(pessoa['nome']); // OU console.log(pessoa.nome);
// const chave = 'nome';
// console.log(pessoa[chave])

// new Objet ou {}
// const pessoa1 = new Object();
// pessoa1.nome = 'Catarina';
// pessoa1.sobrenome = 'Souza';
// pessoa1.idade = 20;
// pessoa1.falarNome = function() {
//     return (`${this.nome} está falando`)
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };
// console.log(pessoa1.getDataNascimento());

// for(let chave in pessoa1) {
// console.log(pessoa1[chave]); // valor das chaves
// }

//Factory Functions

// function criaPessoa(nome, sobrenome) {
//         return {
//             nome,
//             sobrenome,
//             nomeCompleto() {
//                 return `${this.nome} ${this.sobrenome}`;
//             }
//         };
// }

// const p1 = criaPessoa('Catarina', 'Souza');
// console.log(p1.nomeCompleto())

//Constructor Function

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // nenhum objeto dessa função pode ser alterado
}

// {} <- this -> this
const p1 = new Pessoa('Catarina', 'Miranda');
Object.freeze(p1); // impedi que o valor de p1 seja alterado
p1.nome = 'Outra coisa' // isso altera o valor do objeto
// p1 = 'Outra coisa' // isso não pode, pq contante é somente um valor para uma variavel
const p2 = new Pessoa('Sophia', 'Souza');
console.log(p1,p2);