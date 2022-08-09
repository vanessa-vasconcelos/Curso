const fs = require('fs').promises;
const path = require('path');

// fs.readdir(path.resolve(__dirname)) //vai listar as pastas dentro do modulo2
// .then(files => console.log(files))
// .catch(e => console.log(e))

async function readdir(rootDir) {
    rootDir =rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir)
}

async function walk(files,rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if( !/\.html$/g.test(fileFullPath)) continue; // exibi arquivos especificos
        console.log(fileFullPath) //stats.isDirectory() para vê se ele é um diretorio
    }
}
readdir('/Users/nenif/Documents/Nova pasta/Curso JS/Aulas/')