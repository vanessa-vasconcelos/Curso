const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/home_controller');
const { appendFile } = require('fs');

// Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next) {
    console.log();
    console.log('Ainda estou aqui...');
    console.log(`'ultimo middleware' Olha o que tem na req.session.nome ${req.session.nome}`)
} );


route.post('/', homeController.tratarPost);

module.exports = route;