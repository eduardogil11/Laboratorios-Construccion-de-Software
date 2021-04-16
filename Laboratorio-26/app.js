const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csrf = require('csurf');
const csrfProtection = csrf(); 

app.set('view engine', 'ejs');
app.set('views', 'views');

const rutasPersonajes = require('./routes/personajes');
const rutasTipos = require('./routes/tipos');
const rutasTablas = require('./routes/tablas');
const rutasPreguntas = require('./routes/preguntas');
const rutasUsers = require('./routes/users');

//Middleware
//Para acceder fácilmente a los datos de las formas
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen_personaje'));

//Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

//Para acceder a los recursos de la carpeta uploads
app.use(express.static(path.join(__dirname, 'uploads')));

//Para acceder a los valores de las cookies
app.use(cookieParser());
//Para trabajar con sesiones
app.use(session({
    secret: 'grgrfgrgeddgaagsres', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.use(csrfProtection);

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/personajes', rutasPersonajes);
app.use('/tipos', rutasTipos);
app.use('/tablas', rutasTablas);
app.use('/preguntas', rutasPreguntas);
app.use('/users', rutasUsers);

app.use((request, response, next) => {
    response.statusCode = 404;
    response.send('Page not found, link is lost in time'); //Manda la respuesta
});

app.listen(3000);