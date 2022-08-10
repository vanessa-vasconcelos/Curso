const express = require('express');
const app = express()

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="name">
    <button>Ola mundo</button>
    </form>`)
} );

app.get('/teste/:idUsuarios?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile)
})

app.get('/', (req, res) => {
    console.log(req.body);
    res.send(`O que voê enviou foi: ${req.body.nome}`)
})

app.get('/teste/:idUsuarios?', (req, res) => {
    console.log(req.params);
    res.send(req.params.idUsuarios)
})



app.listen(3000, () => { // Para o express escutar tudo que chegar nessa porta e responder 
    console.log('Acessar http://localhost:3000')
    console.log('Servidor execultando')
}) 