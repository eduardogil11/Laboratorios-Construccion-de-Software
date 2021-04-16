exports.get = (request, response, next) => {
    response.render('tablas', { 
    titulo: 'Tabla de tipos',
    isLoggedIn: request.session.isLoggedIn === true ? true : false 
    });
}