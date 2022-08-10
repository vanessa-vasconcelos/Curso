const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/home_controller');
const { appendFile } = require('fs');

// Rotas da home
route.get('/', homeController.paginaInicial );


route.post('/', homeController.tratarPost);

module.exports = route;