const obj = {
    "name": "download",
    "actionConfig": {
        "mimeType": "text/csv",
        "type": "actionWithIcon",
        "url": {
            "refId": "actionDownloadClaims",
            "params": {}
        }
    },
    "type": "callback",
    "visibility": "downloadClaimsAction",
    "ariaLabel": {
        "refId": "displayTextTitleDownload",
        "value": ""
    }
}

const obj2 = obj;
// console.log(obj2.address == obj.address);
// console.log(obj2.address.details == obj.address.details);

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
// console.log(obj2.address.details == deep.address.details);


// Another approch

// const deepCloneMethod = (obj) => {

//     if(typeof obj != "object" || obj === null) return obj;

//     const newObject = Array.isArray(obj) ? [] : {};
    
//     for(let key in obj) {
//         const value = obj[key];
//         newObject[key] = deepCloneMethod(value);
//     }

//     return newObject;
// }

// const deepy = deepCloneMethod(obj);
// console.log(deepy);
// console.log(obj2.address.details == deepy.address.details);