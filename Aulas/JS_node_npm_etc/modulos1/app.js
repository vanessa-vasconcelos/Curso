// const mod1 = require('./mod1') //importando
// console.log(mod1.falaNome())

// const falaNome = require('./mod1').falaNome // algo em especifico
// console.log(falaNome())

// const {nome, sobrenome, falaNome} = require('./mod1'); // associação por desestruturação
// console.log(nome, sobrenome)
// console.log(falaNome());

const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Mateus');
console.log(p1)


const axios = require('axios');

axios('http://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e))
