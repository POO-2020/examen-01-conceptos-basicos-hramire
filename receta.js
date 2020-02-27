export default class Receta{
    /**
     * 
     * @param {String} nombre 
     * @param {String} autor 
     */
    constructor(nombre, autor)
    {
        this.nombre = nombre
        this.autor = autor
        this.ingredientes = new Array
    }

    agregarIngrediente(ingrediente){
        this.ingredientes.push(ingrediente)
    }

    getNumeroIngredientes(){
        let numero = 0
        this.ingredientes.forEach( (ingrediente, i) => {
            numero = i
        })
        return numero+1
    }

    getCosto(){
        let total=0
        this.ingredientes.forEach( (ingrediente, i) => {
            total = (total + ingrediente.costo)
        })
        return total
    }

    imprimirEnConsola(){
        console.log(`${this.nombre} Autor: ${this.autor} Ingredientes:`)
        this.ingredientes.forEach( (ingrediente, i) => {
             console.log(`${i+1}. ${ingrediente.getDescripcion()}`)
        })
        console.log(`total $${this.getCosto()} pesos`)
    }
}