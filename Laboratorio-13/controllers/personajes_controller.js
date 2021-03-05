const Personaje = require('../models/personaje');

exports.getNuevoPersonaje = (request, response, next) => {
    response.render('nuevo-personaje', {
    titulo: 'Nuevo Pokémon' 
    }); 
}

exports.postNuevoPersonaje = (request, response, next) => {
    console.log(request.body.nombre_personaje);
    const nuevo_personaje = new Personaje(request.body.nombre_personaje, request.body.imagen_personaje);
    nuevo_personaje.save();
    response.redirect('/personajes');
}

exports.get = (request, response, next) => {
    const personajes = Personaje.fetchAll(); 
    response.render('personajes', { 
    lista_personajes: personajes, 
    titulo: 'Pokémons' 
    });
}