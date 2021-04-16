const Personaje = require('../models/personaje');

exports.getNuevoPersonaje = (request, response, next) => {
    response.render('nuevo-personaje', {
    titulo: 'Nuevo Pokémon',
    csrfToken: request.csrfToken(),
    isLoggedIn: request.session.isLoggedIn === true ? true : false  
    }); 
}

exports.postNuevoPersonaje = (request, response, next) => {
    console.log(request.body.nombre_personaje);
    const image = request.file;
    console.log(image);

    if(!image) {
        console.error('Error al subir la imagen');
        return response.status(422).redirect('/');
    }
    const nuevo_personaje = new Personaje(request.body.nombre_personaje, image.filename, request.body.resumen_personaje);
    nuevo_personaje.save()
        .then(() => {
            response.setHeader('Set-Cookie', ['ultimo_personaje=' + nuevo_personaje.nombre + '; HttpOnly']);
            response.redirect('/personajes');
        }).catch(err => console.log(err));
}

exports.getPersonaje = (request, response, next) => {
    const id = request.params.personaje_id;
    Personaje.fetchOne(id)
    .then(([rows, fieldData]) => {
        response.render('personajes', { 
            lista_personajes: rows, 
            titulo: 'Pokémons',
            isLoggedIn: request.session.isLoggedIn === true ? true : false 
        });
    })
    .catch(err => {
        console.log(err);
    });
}

exports.postBuscar = (request, response, next) => {
    console.log(request.body);
    console.log(request.body.valor_busqueda);
    const name = request.body.valor_busqueda;
    Personaje.fetchByName(name)
    .then(([rows, fieldData]) => {
        console.log(rows);
        response.status(200).json(rows);
    })
    .catch(err => {
        console.log(err);
    });
};

exports.get = (request, response, next) => {
    console.log('Cookie: ' + request.get('Cookie'));
    //console.log(request.get('Cookie').split(';')[1].trim().split('=')[1]);

    // Con cookie-parser
    console.log(request.cookies);
    console.log(request.cookies.ultimo_personaje);

    Personaje.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('personajes', { 
            lista_personajes: rows, 
            titulo: 'Pokémons',
            csrfToken: request.csrfToken(),
            isLoggedIn: request.session.isLoggedIn === true ? true : false 
        });
    })
    .catch(err => {
        console.log(err);
    });
}