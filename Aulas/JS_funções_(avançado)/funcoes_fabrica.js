//Factory function (Função fábrica)
// Constructor function (Função Construtora)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        // Getter -> a função não é mais função, mas um atributo do objeto
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor)
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura: a,
        peso: p,

        get imc() {
            const indice = this.peso / (this.altura * 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);