class Pesssoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };

    falar() {
        console.log(`${this.nome} está falando.`)
    };
};



const p1 = new Pesssoa('Luiz', 'Miranda');
console.log(p1)