const Tipo = require('../models/tipo');

exports.getNuevoTipo = (request, response, next) => {
    const tipos = Tipo.fetchAll(); 
    response.render('nuevo-tipo', {
    lista_tipos: tipos, 
    titulo: 'Videojuegos',
    isLoggedIn: request.session.isLoggedIn === true ? true : false 
    }); 
}

exports.get = (request, response, next) => {
    response.render('tipos', { 
    titulo: 'Tabla de tipos',
    isLoggedIn: request.session.isLoggedIn === true ? true : false 
    });
}