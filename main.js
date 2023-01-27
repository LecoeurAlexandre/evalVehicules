import Moto from "./classes/moto.js";
import Car from "./classes/car.js";

const car = new Car ("Renault", "Kangoo", "240.000km", 2003, "Climatisée" );
const moto = new Moto ("BMW", "R1150R Rockster", "65.000km", 2005);
console.log(moto)
console.log(car.display())

let resultOutput = document.querySelector("#display");
resultOutput.innerHTML = car.display();
resultOutput.innerHTML += moto.display();