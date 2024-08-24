/////////////// *************************************** */


const obj = { a: 1, b: 2 };
Object.seal(obj);

obj.a = 3; // Allowed, since 'a' is still writable
delete obj.b; // Not allowed, as properties cannot be removed

obj.c = 4; // Not allowed, as new properties cannot be added
console.log(obj); // { a: 3, b: 2 }


//////////// ***************************** //////////////////

const obj = { a: 1, b: 2 };
Object.freeze(obj);

obj.a = 3; // Not allowed, as properties are non-writable
delete obj.b; // Not allowed, as properties are non-configurable

obj.c = 4; // Not allowed, as new properties cannot be added
console.log(obj); // { a: 1, b: 2 }


///////// ******************************* /////////

const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 2 }