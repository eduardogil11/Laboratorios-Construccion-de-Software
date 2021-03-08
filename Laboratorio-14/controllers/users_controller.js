exports.getLogin = (request, response, next) => {
    response.render('login', {
    titulo: 'Inicia sesión',
    isLoggedIn: request.session.isLoggedIn === true ? true : false 
    }); 
};

exports.postLogin = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario;
    response.redirect('/personajes');
};

exports.getLogout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};