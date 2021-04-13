exports.get = (request, response, next) => {
    response.render('preguntas', { 
    titulo: 'Preguntas',
    isLoggedIn: request.session.isLoggedIn === true ? true : false 
    });
}