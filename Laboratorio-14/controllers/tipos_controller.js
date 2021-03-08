const Tipo = require('../models/tipo');

exports.getNuevoTipo = (request, response, next) => {
    const tipos = Tipo.fetchAll(); 
    response.render('nuevo-tipo', {
    lista_tipos: tipos, 
    titulo: 'Videojuegos',
    isLoggedIn: request.session.isLoggedIn === true ? true : false 
    }); 
}

exports.postNuevoTipo = (request, response, next) => {
    console.log(request.body.nombre_tipo);
    const nuevo_tipo = new Tipo(request.body.nombre_tipo, request.body.imagen_tipo, request.body.resumen_tipo);
    nuevo_tipo.save();
    response.redirect('/tipos');
}

exports.get = (request, response, next) => {
    response.render('tipos', { 
    titulo: 'Tabla de tipos',
    isLoggedIn: request.session.isLoggedIn === true ? true : false 
    });
}