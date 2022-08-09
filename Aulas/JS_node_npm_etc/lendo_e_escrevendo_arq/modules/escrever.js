const fs = require('fs').promises;

//escrever um arquivo -  Na flag está dizendo para apagar td que já tem no arquivo 
// fs.writeFile(caminhoArquivo, 'Fase 1', { flag: 'w'})

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w'});  //fs.writeFile(caminhoArquivo, json, { flag: 'w'});
}
