const Personaje = require('../models/personaje');

exports.getNuevoPersonaje = (request, response, next) => {
    response.render('nuevo-personaje', {
    titulo: 'Nuevo Pokémon',
    isLoggedIn: request.session.isLoggedIn === true ? true : false  
    }); 
}

exports.postNuevoPersonaje = (request, response, next) => {
    console.log(request.body.nombre_personaje);
    const nuevo_personaje = new Personaje(request.body.nombre_personaje, request.body.imagen_personaje, request.body.resumen_personaje);
    nuevo_personaje.save();
    response.setHeader('Set-Cookie', ['ultimo_personaje=' + nuevo_personaje.nombre + '; HttpOnly']);
    response.redirect('/personajes');
}

exports.get = (request, response, next) => {
    const personajes = Personaje.fetchAll(); 
    console.log('Cookie: ' + request.get('Cookie'));
    //console.log(request.get('Cookie').split(';')[1].trim().split('=')[1]);

    // Con cookie-parser
    console.log(request.cookies);
    console.log(request.cookies.ultimo_personaje);
    
    response.render('personajes', { 
    lista_personajes: personajes, 
    titulo: 'Pokémons',
    isLoggedIn: request.session.isLoggedIn === true ? true : false 
    });
}