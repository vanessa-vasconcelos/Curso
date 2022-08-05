function rand(max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('CAIR NO ERRO')
            return;
        } 
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo)
    })
}

// Promise.all -> ENTREGA TODOS OS VALORES, NÃO IMPORTA A ORDEM
// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     esperaAi(1000, 1000),
//     'Outro valor'
// ];

// Promise.all(promises)
// .then(function(valor) {
//     console.log(valor);
// })
// .catch(function(erro) {
//     console.log(erro);
// });

// Promise.race -> Mostra quem foi execultado primeiro
const promises = [
    esperaAi('Promise 1', 3000), // ou rand(1, 5)
    esperaAi('Promise 2', 500), // ou rand(1, 5)
    esperaAi('Promise 3', 1000), // ou rand(1, 5)
    // esperaAi(1000, 1000),
];

Promise.race(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
});