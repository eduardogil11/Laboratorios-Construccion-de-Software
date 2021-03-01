console.log('Hola a todos');

console.log('Pokemon');

const http = require('http');

const requestHandler = require('./routes');

const server = http.createServer( requestHandler );

server.listen(3000);

/*const filesystem = require('fs');
            filesystem.writeFileSync('Pokemon.txt', nuevo_personaje + ",");*/