const obj = {
    name: "Toshal",
    lastName: "Lubana",
    address: {
        houseNumber: 469,
        pinCode: 134107,
        details:{
            phoneNumber: 1234567890
        }
    }
}

const obj2 = obj;
console.log(obj2.address == obj.address);
console.log(obj2.address.details == obj.address.details);

function deepClone(obj){
    const deepClonedobj = {};

    for(let key in obj){
        if(typeof obj[key] == 'object' && typeof obj[key] !==  null){
            deepClonedobj[key] = deepClone(obj[key]);
        }else{
            deepClonedobj[key] = obj[key];
        }
    }
    return deepClonedobj;
}

const deep = deepClone(obj);
console.log(deep);
console.log(obj2.address.details == deep.address.details);