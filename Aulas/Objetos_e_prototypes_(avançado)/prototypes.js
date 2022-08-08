function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'Original' + this.nome + ' ' + this.sobrenome; // ela se sobresai da prototype


    Pessoa.prototype.nomeCompleto = function() {
        return this.nome + ' ' + this.sobrenome;
    }
}
const pessoa1 = new Pessoa('Luiz', ' Sampaio');
const pessoa2 = new Pessoa('Vanessa', 'Vasconcelos');
console.log(pessoa1)