const personajes = [{nombre: "Bulbasaur", imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"}, 
{nombre: "Charmander", imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"}, 
{nombre: "Squirtle", imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"}, 
{nombre: "Pikachu", imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"}];

module.exports = class Personaje {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
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