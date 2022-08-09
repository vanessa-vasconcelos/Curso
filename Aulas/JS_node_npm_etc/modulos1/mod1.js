// const nome = 'Luiz';
// const sobrenome = 'Miranda';

// const falaNome = () => nome + ' ' + sobrenome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.falaNome = 'qualquer coisa'
// console.log(exports)

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;