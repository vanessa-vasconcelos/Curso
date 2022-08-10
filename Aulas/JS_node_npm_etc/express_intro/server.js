const express = require('express');
const app = express()

//        CRIAR    LER  ATUALIZAR  APAGAR
// GRUD - CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT   DELETAR

//http://meusite.com/ <- GET -> Entregue a página /
//http://meusite.com/sobre <- GET -> Entregue a página-rota /sobre 

//     rota
app.get('/', (req, res) => {
    res.send('Hello word!')
} );

app.get('/contato', (req, res) => {
    res.send('Obrigada por entrar em contato com a gente.')
})

app.listen(3000, () => { // Para o express escutar tudo que chegar nessa porta e responder 
    console.log('Acessar http://localhost:3000')
    console.log('Servidor execultando')
}) 