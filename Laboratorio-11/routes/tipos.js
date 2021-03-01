const express = require('express');
const router = express.Router();
const tipos = ["Planta", "Fuego", "Agua"];

router.get('/nuevo-tipo', (request, response, next) => {
    response.send('<h1>Nuevo Tipo</h1><body><h1>Agrega un nuevo tipo a la tabla de tipos: </h1><form action="nuevo-tipo" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar tipo"></form>'); 
});

router.post('/nuevo-tipo', (request, response, next) => {
    console.log(request.body.nombre);
    tipos.push(request.body.nombre);
    response.redirect('/tipos');
});

router.use('/', (request, response, next) => {
    let html = '<h1>Tabla de tipos: </h1><ul>';
    for (let tipo of tipos) {
        html = html + '<li>' + tipo + '</li>';
    }
    html = html + '</ul>';
    response.send(html); 
});

module.exports = router;