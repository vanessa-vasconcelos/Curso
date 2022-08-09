const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler')

// const pessoas = [
//     {pessoa: 'Luiz'},
//     {pessoa: 'Maria'},
//     {pessoa: 'Liz'},
//     {pessoa: 'Lana'},
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados); // transformar novamente em objeto
    dados.forEach(val => console.log(val));
}
lerArquivo(caminhoArquivo)



