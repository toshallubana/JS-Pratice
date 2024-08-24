const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 4,
            g: 5
        }
    },
    i: 6
}

// output

// const output = {
//     a: 1,
//     b: 2,
//     "c.d ": 3,
//     "c.e.f": 4,
//     "c.e.g": 5,
//     i: 6
// }

const flattenObject = (object, addedKey = '', output = {}) => {
    let finalObj = output;
    for(let key in object) {
        let addKey = addedKey == '' ? key : `${addedKey}.${key}`;
        if(typeof object[key] == 'object'){
            // addedKey
            flattenObject(object[key], `${addKey}`, output)
        } else {
            output[addKey] = object[key]
        }
    }
    return finalObj
}
console.log(flattenObject(obj))