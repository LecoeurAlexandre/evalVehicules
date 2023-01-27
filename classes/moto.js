import Vehicule from "./vehicule.js";

export default class Moto extends Vehicule {
    constructor(brand, model, km, year) {
        super(brand, model, km, year)
    }
    
    display () {
        return `<p><b>Moto</b> : ${super.display()}</p>`
    }
}