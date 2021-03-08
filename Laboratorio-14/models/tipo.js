const tipos = [{nombre: "Pokémon Espada y Pokémon Escudo", imagen: "https://assets.pokemon.com/assets/cms2-es-es/img/video-games/video-games/pokemon_sword_shield/sword-shield-169-es.jpg", 
resumen: "Pokémon Espada y Escudo, son dos videojuegos de rol desarrollados por Game Freak y publicados por Nintendo y The Pokémon Company para Nintendo Switch. Son los primeros juegos de la octava generación de la serie principal de Pokémon."},
{nombre: "Pókemon Sol y Pokémon Luna", imagen: "https://assets.pokemon.com/assets/cms2-es-es/img/video-games/video-games/pokemon_sun_moon/pokemon-sun-moon-169-es.jpg", 
resumen: "Pokémon Sol y Luna, son dos videojuegos para las consolas de la familia de Nintendo 3DS. Se trata de los juegos que inician la séptima generación de criaturas Pokémon, situándose el juego en la tropical región de Alola."},
{nombre: "Pokémon X y Pokémon Y", imagen: "https://assets.pokemon.com/assets/cms2-es-es/img/video-games/video-games/pokemon_x_y/pokemon_x_y_main_169.jpg", 
resumen: "Pokémon X y Pokémon Y, son dos videojuegos de RPG y aventura, desarrollados por Game Freak y distribuidos por Nintendo para la consola portátil Nintendo 3DS."}];

module.exports = class Tipo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen, resumen) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.resumen = resumen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        tipos.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return tipos;
    }

}