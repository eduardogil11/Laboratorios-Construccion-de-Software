const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const rutasPersonajes = require('./routes/personajes');
const rutasTipos = require('./routes/tipos');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

//Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/preguntas', (request, response, next) => {
    response.render('preguntas', { 
    titulo: 'Preguntas' 
    });
});

app.use((request, response, next) => {
    response.statusCode = 404;
    response.send('Page not found, link is lost in time'); //Manda la respuesta
});

app.listen(3000);