import Cantidad from "./cantidad.js";
import Ingrediente from "./ingrediente.js";
import Receta from "./receta.js";

class Main{
    constructor(){
        this.cantidad = new Cantidad(500, "gramos")
        this.cantidad2 = new Cantidad(3, "litro")
        this.ingrediente = new Ingrediente(this.cantidad, "PAPA", 10)
        this.ingrediente2 = new Ingrediente(this.cantidad2, "Agua", 20)
        this.receta = new Receta("Papa cocida", "-Chef-Linguini-")
    }

    getCantidad(){
        console.log(this.cantidad.getDescripcion())
    }
    getIngrediente(){
        console.log(this.ingrediente.getDescripcion())
    }

    getReceta(){
        this.receta.agregarIngrediente(this.ingrediente)
        this.receta.agregarIngrediente(this.ingrediente2)
        console.log(this.receta.getNumeroIngredientes())
        console.log(this.receta.getCosto())
        this.receta.imprimirEnConsola()
    }
}

let app = new Main()
app.getCantidad()
app.getIngrediente()
app.getReceta()