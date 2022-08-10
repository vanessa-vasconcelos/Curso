const express = require('express');
const route = express.Router();
const homeController = require('./controllers/home_controller');

// Rotas da home
route.get('/', homeController.paginaInicial );
route.post('/', homeController.tratarPost);

module.exports = route;