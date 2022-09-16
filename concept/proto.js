// Object literals
const person = {
    alive: true
}

const musician = {
    plays: true
}

// JS now has getPrototypeOf and setPrototype methods instead of using
// __proto__
Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));

const guitarist = {
    strings: 6,
    __proto__: musician
}
console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);

const car = {
    doors: 2,
    seats: 'vinyl',
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather";
console.log(luxuryCar);

// Object constructor
function Animal(species) {
    this.species = species;
    this.eats = true;
}

Animal.prototype.walks = function() {
    return `A ${this.species} is walking`;
}

const Bear = new Animal('bear');

console.log(Bear.species);
console.log(Bear.walks());

// Class based prototyping

class vehicle {
    constructor() {
        this.motorize = 4
    }

    ready() {
        return "Ready to go";
    }
}

class MotorCycle extends vehicle {
    constructor() {
        super();
        this.wheels = 2;
    }

    wheelie() {
        return "On one wheel now!!";
    }
}

const myBike = new MotorCycle();
console.log(myBike);
