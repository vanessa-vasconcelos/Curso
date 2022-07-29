// defineproperty - bloqueia uma    defineProperties - bloqueia mais de duas

function Produto( nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // true para poder alterar e false para n alterar 
        configurable: true //se é configuravel ou nao 
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // true para poder alterar e false para n alterar 
            configurable: true //se é configuravel ou nao 
        },

        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: false, // true para poder alterar e false para n alterar 
            configurable: false //se é configuravel ou nao 
        }
    })
}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1)
console.log(Object.keys(p1)); // para mostrar só as chaves