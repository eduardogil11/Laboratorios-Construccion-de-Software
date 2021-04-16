const Tipo = require('../models/tipo');

exports.getTipo = (request, response, next) => {
    const tipos = Tipo.fetchAll(); 
    response.render('tipos', {
    lista_tipos: tipos, 
    titulo: 'Videojuegos',
    csrfToken: request.csrfToken(),
    isLoggedIn: request.session.isLoggedIn === true ? true : false 
    }); 
}

exports.postBuscar = (request, response, next) => {
    console.log(request.body);
    console.log(request.body.valor_busqueda);
    const name = request.body.valor_busqueda;
    Tipo.fetchByName(name)
    .then(([rows, fieldData]) => {
        console.log(rows);
        response.status(200).json(rows);
    })
    .catch(err => {
        console.log(err);
    });
};