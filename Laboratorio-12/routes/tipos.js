const express = require('express');
const router = express.Router();
const path = require('path');
const tipos = ["Planta", "Fuego", "Agua"];

router.get('/nuevo-tipo', (request, response, next) => {
    response.render('nuevo-tipo', {
    titulo: 'Nuevo Tipo' 
    }); 
});

router.post('/nuevo-tipo', (request, response, next) => {
    console.log(request.body.nombre_tipo);
    tipos.push(request.body.nombre_tipo);
    response.redirect('/tipos');
});

router.use('/', (request, response, next) => {
    response.render('tipos', { 
    lista_tipos: tipos, 
    titulo: 'Tabla de tipos: ' 
    });
});

module.exports = router;