const pessoa = {
    nome: 'Luiz',
    sobrenome: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { endereco: { rua, numero } } = pessoa;
console.log(rua,  numero);
// Atribuição via desestruturação
// const { nome, sobrenome } = pessoa;
// console.log(nome, sobrenome);

// Quando quer algo especifico do objeto dentro do objeto global

