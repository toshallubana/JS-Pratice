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

const object2 = {
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

// const obj1 = {...obj};
// console.log(obj1.address == obj.address, 'obj1')

function compareObject(obj1, obj2) {
    if (obj1 === obj2) {
      return true; // Identical reference or primitive values
    }
  
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
      return false; // Different types or one is null
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of properties is different
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Recursively check each property
    for (const key of keys1) {
      if (!keys2.includes(key) || !compareObject(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }

console.log(compareObject(object1, object2))