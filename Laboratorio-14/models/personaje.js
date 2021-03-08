const personajes = [{nombre: "Bulbasaur", imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", 
resumen: "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo."}, 
{nombre: "Charmander", imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", 
resumen: "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola."}, 
{nombre: "Squirtle", imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png", 
resumen: "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble."}, 
{nombre: "Pikachu", imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", 
resumen: "Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas."}];

module.exports = class Personaje {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen, resumen) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.resumen = resumen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        personajes.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return personajes;
    }

}