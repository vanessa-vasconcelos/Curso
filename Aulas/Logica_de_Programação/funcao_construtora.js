//Construtora -> Pessoa (new)

function Pessoa (nome, sobrenome) {
    //Pessoa.nome
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ' sou um metodo')
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Tamara', 'Lira');
p1.metodo();
