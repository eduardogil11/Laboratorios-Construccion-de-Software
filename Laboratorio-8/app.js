console.log("Hola desde Node");

// Una función que reciba un arreglo de números y devuelva su promedio.
const arreglo = [11, 30, 25, 6, 19];
let prom = 0;
        for(let i = 0; i<arreglo.length; i++){       
            prom += arreglo[i];
        }
        console.log(arreglo);
        console.log("El promedio del arreglo es: " + prom/arreglo.length);

//Una función que reciba un string y escriba el string en un archivo de texto.
const filesystem = require('fs');

filesystem.writeFileSync('Pokemon.txt', 'La serie de videojuegos de Pokémon, son videojuegos de rol desarrollados por Game Freak y publicados para videoconsolas portátiles de Nintendo.');

// Servidor
const http = require('http');

const server = http.createServer( (request, response) => {
    console.log("Hola desde el servidor");
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<html>")
    response.write("<head>")
    response.write("<title>Laboratorio 8</title>")
    response.write("</head>")

    response.write("<body>")
    response.write("<header>")
    response.write("<h1>Laboratorio 8</h1>")
    response.write("</header>")
    response.write("<hr></hr>")
    response.write("<p>Eduardo Rodriguez Gil - A01274913</p>") 
    response.write("<p>A01274913@itesm.mx</p>")
    response.write("<hr></hr>")

    response.write("<main>")

    response.write("<h4>Como ingeniero de software, cual es tu recomendacion sobre el uso de !important en un CSS?</h4>")
    response.write("<p>Como ingeniero de software recomiendo que no se debe de utilizar mucho el !important, ya que no todos los navegadores llegan a comprenderla, esto hace que algunos la ignoren y otros no.</p>")

    response.write("<h4>Si se pone una imagen de fondo en una pagina HTML, por que debe escogerse con cuidado?</h4>")
    response.write("<p>Se debe de escoger con cuidado una imagen que sea de calidad para que no se llegue a lastimar la credibilidad de la pagina, de igual forma para no lastimar la vista del usuario.</p>")

    response.write("<h4>Como ingeniero de software, cual es tu recomendacion al elegir las unidades de un propiedad de estilo entre %, px y pt?</h4>")
    response.write("<p>Como ingeniero de software recomiendo al elegir las unidades de una propiedad de estilo a %, ya que esta hace mas facil el ajuste la pagina al dispositivo utilizado.</p>")

    response.write("<h4>Por que el uso de una version minimizada del CSS mejora el rendimiento del sitio?</h4>")
    response.write("<p>El uso de una version minimizada del CSS mejora el rendimiento del sitio, ya que elimina los espacios en blanco, esto hace que la pagina web sea mas rapida al cargar.</p>")

    response.write("</main>")
    response.write("</body>")  
    response.write("</html>")
    response.end();
});

server.listen(3000);