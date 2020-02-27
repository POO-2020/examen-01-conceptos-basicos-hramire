export default class Ingrediente{
    /**
     * 
     * @param {Cantidad} cantidad 
     * @param {String} nombre 
     * @param {Number} costo 
     */
    constructor(cantidad, nombre, costo)
    {
        this.cantidad = cantidad
        this.nombre = nombre
        this.costo = costo
    }

    getDescripcion(){
        return (`${this.cantidad.getDescripcion()} de ${this.nombre} $${this.costo}`)
    }
}