const express = require('express');
const router = express.Router();
const path = require('path');
const filesystem = require('fs');
const personajes = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"];

router.get('/nuevo-personaje', (request, response, next) => {
    response.render('nuevo-personaje', {
    titulo: 'Nuevo Personaje' 
    }); 
});

router.post('/nuevo-personaje', (request, response, next) => {
    console.log(request.body.nombre_personaje);
    personajes.push(request.body.nombre_personaje);
    filesystem.writeFileSync('Pokemon.txt', request.body.nombre_personaje);
    response.redirect('/personajes');
});

router.use('/', (request, response, next) => {
    response.render('personajes', { 
    lista_personajes: personajes, 
    titulo: 'Pokémons: ' 
    });
});

module.exports = router;