const Tipo = require('../models/tipo');

exports.getNuevoTipo = (request, response, next) => {
    response.render('nuevo-tipo', {
    titulo: 'Nuevo Tipo: ' 
    }); 
}

exports.postNuevoTipo = (request, response, next) => {
    console.log(request.body.nombre_tipo);
    const nuevo_tipo = new Tipo(request.body.nombre_tipo, request.body.imagen_tipo);
    nuevo_tipo.save();
    response.redirect('/tipos');
}

exports.get = (request, response, next) => {
    const tipos = Tipo.fetchAll(); 
    response.render('tipos', { 
    lista_tipos: tipos, 
    titulo: 'Tabla de tipos: ' 
    });
}