// module.exports = function(x, y) { // pode ser string, number, class, etc.
//     return x * y;
// };
//caso queira executar a função nessa pagina mesmo
// console.log(module.exports(2,2));

module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    };

    latir() {
        console.log(`${this.nome} está falando au au`);
    };
};