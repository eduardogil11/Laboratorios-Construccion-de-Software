const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const rutasPersonajes = require('./routes/personajes');
const rutasTipos = require('./routes/tipos');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/personajes', rutasPersonajes);
app.use('/tipos', rutasTipos);

app.get('/', (request, response, next) => {
    console.log('Bienvenido');
    response.send('<h1>¡Hola mundo!</h1>'); 
});

app.use((request, response, next) => {
    response.statusCode = 404;
    response.send('Page not found, link is lost in time'); //Manda la respuesta
});

app.listen(3000);