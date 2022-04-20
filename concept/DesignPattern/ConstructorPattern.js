////////////////////////////////////////////////////////
// 1. Object creation

// var newObject = {};
// or
// var newObject = Object.create( Object.prototype );
// or
// var newObject = new Object();

/////////////////////////////////////////////////////////
// 2. Basis Constructor

// function person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = function(){
//         console.log(`${this.firstName} ${this.lastName}`)
//     }

// }
// const DetailPerson = new person("Toshal","Lubana");
// DetailPerson.fullName();

/////////////////////////////////////////////////////////

// 3. Constructor with prototype

// function Car(model,miles,color){
//     this.model = model;
//     this.miles = miles;
//     this.color = color;
// }

// Car.prototype.toString = function(){
//     return `${this.model} ${this.miles} ${this.color}`;
// }

// const newCar = new Car('2022','G wagon','Phantom Black');
// console.log(newCar.toString());


// Module Pattern

// const personModule = (function(){
//     let firstName;
//     let lastName;

//     return {
//         setName(f,l){
//             firstName = f;
//             lastName = l;
//         },
//         getName(){
//             return firstName + ' ' + lastName;
//         }
//     }
// })();
// personModule.setName('Toshal','lubana');
// console.log(personModule.getName());

// Singleton
// The Singleton pattern is thus known because it restricts instantiation of a class to a single object. Classically, the Singleton pattern can be implemented by creating a class with a method that creates a new instance of the class if one doesn’t exist. In the event of an instance already existing, it simply returns a reference to that object.


const MyNameSpace = {};
MyNameSpace.singleton = (function(){
    let instance;

    function init(){
        let name;

        this.setName = function(name){
            return this.name = name;
        }
        this.getName = function(){
            return this.name;
        }

        return {
            setName: setName,
            getName: getName
        }
    }

    function getinstance(){
        if(!instance){
            instance = init();
        }
        return instance;
    }

    return {
        getinstance: getinstance
    }
})();

const one = MyNameSpace.singleton.getinstance();
const second = MyNameSpace.singleton.getinstance();

// console.log(one == second);

one.setName("lubana")
console.log(second.getName());