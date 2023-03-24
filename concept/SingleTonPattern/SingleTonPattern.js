class Singleton {
    constructor() {
        if(Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.someProperty = "I am the Singleton instance";
        return this;
    }

    someMethod() {
        console.log("I am a method on the Singleton instance");
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);
console.log(instance1.someProperty);
instance1.someMethod();