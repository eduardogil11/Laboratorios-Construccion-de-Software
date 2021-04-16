const tipos = [{nombre: "Pokémon Espada y Pokémon Escudo", imagen: "https://assets.pokemon.com/assets/cms2-es-es/img/video-games/video-games/pokemon_sword_shield/sword-shield-169-es.jpg", 
resumen: "Pokémon Espada y Escudo, son dos videojuegos de rol. Son los primeros juegos de la octava generación de la serie principal de Pokémon."},
{nombre: "Pókemon Sol y Pokémon Luna", imagen: "https://assets.pokemon.com/assets/cms2-es-es/img/video-games/video-games/pokemon_sun_moon/pokemon-sun-moon-169-es.jpg", 
resumen: "Pokémon Sol y Luna, son dos videojuegos para las consolas de la familia de Nintendo 3DS. Se trata de los juegos que inician la séptima generación de criaturas Pokémon."},
{nombre: "Pokémon X y Pokémon Y", imagen: "https://assets.pokemon.com/assets/cms2/img/video-games/_tiles/pokemon-xy/pokemon-xy-launch-169.jpg", 
resumen: "Pokémon X y Pokémon Y, son dos videojuegos de RPG y aventura. Pertenecen a la serie de videojuegos Pokémon, e inauguran la sexta generación de la misma."},
{nombre: "Pokémon Negro y Pokémon Blanco", imagen: "https://pokemonalpha.xyz/wp-content/uploads/Pok%C3%A9mon-Negro-y-Blanco-portadas.png", 
resumen: "Pokémon Black Version y White Version, son dos videojuegos de Pokémon pertenecientes a la quinta generación.​"},
{nombre: "Pokémon Edición Diamante y Pokémon Edición Perla", imagen: "https://media.redadn.es/imagenes/pokemon-edicion-diamante-nintendo-ds_331989.jpg", 
resumen: "Pokémon Edición Diamante y Edición Perla, representan la cuarta generación de la saga de videojuegos Pokémon.​"},
{nombre: "Pokémon Edición Rubí y Pokémon Edición Zafiro", imagen: "https://pokemonalpha.xyz/wp-content/uploads/Pok%C3%A9mon-Rub%C3%AD-y-Pok%C3%A9mon-Zafiro.png", 
resumen: "Pokémon Edición Rubí y Pokémon Edición Zafiro, son dos videojuegos del género RPG pertenecientes a la tercera generación de la saga Pokémon.​"},
{nombre: "Pokémon Edición Oro y Pokémon Edición Plata", imagen: "https://pokemonalpha.xyz/wp-content/uploads/Pok%C3%A9mon_Edici%C3%B3n_Oro_y_Pok%C3%A9mon_Edici%C3%B3n_Plata.png", 
resumen: "Pokémon Edición Oro y Edición Plata, son la segunda entrega de la serie de videojuegos de Pokémon, de género RPG.​"},
{nombre: "Pokémon Edición rojo y Pokémon Edición verde", imagen: "http://4.bp.blogspot.com/_PBTMDZy9U-w/THxWH21C15I/AAAAAAAABhw/VfBTdfQmFLI/s1600/tapa+poke.JPG", 
resumen: "Pokémon Edición Roja y Pokémon Edición Azul, ​ son dos videojuegos de rol. Son las primeras entregas de la serie de videojuegos de la franquicia Pokémon.​"}];

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

    static fetchByName(tipos) {
        return tipos;
    }
}