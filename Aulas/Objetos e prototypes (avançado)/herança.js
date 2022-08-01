function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // conecta a função produto com essa
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.materail = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Caneca;


const produto = new Produto('Gene', '5.65')
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Bool', 20, 'porcelana', 5);

camiseta.aumento(10)
console.log(produto)
console.log(camiseta)
console.log(caneca)