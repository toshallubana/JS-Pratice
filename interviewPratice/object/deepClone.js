const object1 = {
    name: "Toshal",
    lastName: "Lubana",
    address: {
        street: "Gurugram",
        pincode: "134107",
        subAddress: {
            subStreet: "Dlf phase 1"
        }
    }
}

const object2 = object1

console.log(object2.name == object1.name);

// function which accept object as a arguments
const deepClone = (object) => {

    // initilze new object
    let newObj = {}

    // using for in loop
    for(let key in object) {

        // checking if object.key is object type
        if(typeof object[key] == 'object' || typeof object == null) {
            newObj[key] = deepClone(object[key])
        } else {
            newObj[key] = object[key]
        }
    }

    // return final output
    return newObj
}

// calling function which uses object as a parameter
console.log(deepClone(object1));