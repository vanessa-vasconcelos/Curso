class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    };
    // Método de instância - pq la embaixo, preciso chamar ela com controle1.aumantarVolume()
    aumentarVolume() {
        this.volume +=2;
    }

    diminuirVolume() {
        this.volume +=2;
    }

    // Método estático - chama pela a classe ControleRemoto.trocaPilha()
    static trocaPilha() {
        console.log('Ok, irei trocar')
    }
};

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha()