import Vehicule from "./vehicule.js";

export default class Car extends Vehicule {
    constructor(brand, model, km, year, clim) {
        super(brand, model, km, year)
        this.clim = clim
    }

    display () {
        return `<p><b>Voiture</b> : ${super.display()} - ${this.clim}</p>`
    }
}