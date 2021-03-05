const tipos = [{nombre: "Tipo planta", imagen: "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/6/60/Type_Planta.png"},
{nombre: "Tipo fuego", imagen: "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/3/38/Type_Fuego.png"},
{nombre: "Tipo agua", imagen: "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/b/b7/Type_Agua.png"}];

module.exports = class Tipo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
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