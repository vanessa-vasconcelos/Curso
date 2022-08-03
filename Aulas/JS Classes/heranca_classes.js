class DispositivosEletronicos {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    };

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

// const d1 = new DispositivosEletronicos('Smartphone');
// d1.ligar()
// console.log(d1)


 // smartphone está herdando tudo do DE.
class Smartphone extends DispositivosEletronicos {
    constructor(nome, cor){
    super(nome); // classes que o dispositivosEletronicos já tem, para não repetir tudo de novo
    this.cor = cor

    }
}

const s1 = new Smartphone('iPhone', 'Preto');
console.log(s1)