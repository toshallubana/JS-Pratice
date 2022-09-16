class Pizza {
    constructor(size, crust, sauce){
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.topping = [];
    }

    prepare() {console.log.log('Preparing...')}
    bake() {console.log.log('Baking...')}
    ready() {console.log.log('Ready!...')}
}

class Salad {
    constructor(size, dressing){
        this.size = size;
        this.dressing = dressing;
    }

    prepare() {console.log.log('Preparing...')}
    toss() {console.log.log('tossing...')}
    ready() {console.log.log('Ready!...')}
}

class stuffedCrustPizza extends Pizza {
    stuff() {console.log('Buttering the crust...')}
}

class butteredCrustPizza extends Pizza {
    butter() {console.log('Buttering the crust...')}
}

class stuffedButteredCrustPizza extends Pizza {
    stuff() {console.log('Buttering the crust...')}
    butter() {console.log('Buttering the crust...')}
}

const myPizza = new stuffedButteredCrustPizza();
myPizza.stuff();
myPizza.butter();

// Instead, use composition for methods

const prepare = () => {
    return {
        prepare: () => console.log('Preparing...')
    }
}

const bake = () => {
    return {
        bake: () => console.log('Baking...')
    }
}
const toss = () => {
    return {
        toss: () => console.log('Tossing...')
    }
}
const ready = () => {
    return {
        ready: () => console.log('Ready...')
    }
}

const stuff = () => {
    return {
        stuff: () => console.log('Stuffing the crust...')
    }
}

const butter = () => {
    return {
        butter: () => console.log('Buttering the crust...')
    }
}

const createPizza = (size, crust, sauce) => {
    const pizza = {
        size: size,
        crust: crust,
        sauce: sauce,
        topping: []
    }

    return {
        ...pizza,
        ...prepare(),
        ...bake(),
        ...ready()
    }
}

const createSalad = (size, dressing) => {
    return {
        size: size,
        dressing: dressing,
        ...prepare(),
        ...toss(),
        ...ready()
    }
}

const createdStuffedbutteredCrustPizza = (pizza) => {
    return {
        ...pizza,
        ...stuff(),
        ...butter()
    }
}

const anotherPizza = createPizza("medium", "thin" , "original");
const somebodypizza = createdStuffedbutteredCrustPizza(anotherPizza);

// OR
const davesPizza = createdStuffedbutteredCrustPizza(createPizza("medium", "thin" , "original"));
const davesSalad = createSalad("side", "ranch");

davesPizza.bake();
davesPizza.stuff();
davesPizza.prepare();
console.log(davesPizza);
console.log(davesSalad);

// What about the toppings?

const addTopping = (pizza, topping) => {
    pizza.topping.push(topping);
    return pizza;
}

const jimsPizza = createPizza("medium", "thin", "original");
console.log(jimsPizza);
console.log(addTopping(jimsPizza, 'pepperoni'));
console.log(jimsPizza) // mutation!

// We need to clone the pizza object to avoid mutation
// Function composition

const shallowPizzaClone = (fn) => {
    return (obj, array) => {
        const newObj = { ...obj };
        return fn(newObj, array);
    }
}

let addToppings = (pizza, toppings) => {
    pizza.topping = [...pizza.topping, ...toppings];
    return pizza;
}

// Decorate the addToppings function with shallowPizzaClone
addToppings = shallowPizzaClone(addToppings);

const toshalPizza = createPizza("medium", "thin", "original");
const toshalPizzaToppings = addToppings(toshalPizza, ["olives", "cheese", "pepperoni"]);
console.log(toshalPizzaToppings);