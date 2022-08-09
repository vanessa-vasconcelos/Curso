// const mutiplicacao = require('./mod2');

// console.log(mutiplicacao(2, 2))

// const Cachorro = require('./D/mod3');
// const cachorrinho = new Cachorro('Thor');

// cachorrinho.latir()

// variaveis
console.log(__filename); // do arquivo atual
console.log(__dirname); // da pasta atual

const path = require('path');
console.log(path.resolve(__dirname, '..', '..'))