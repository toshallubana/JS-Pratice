const a = {
    foo: 'bar',
    bar: {
      baz: 2
    }
  };
  const b = {
    foo: 'bar',
    bar: {
      baz: 2
    }
  };

const compare = (oldObj, newObj) => {
    for(let k of Object.keys(oldObj)) {
        if (typeof oldObj[k] !== "object") {
            if(typeof newObj[k] === 'function' && typeof oldObj[k] === 'function') {
                return newObj[k].toString() == oldObj[k].toString();
            }else if(newObj[k] !== oldObj[k]) {
                return false
            }
        }else {
            compare(oldObj[k], newObj[k])
        }
    }
    return true;
}
console.log(compare(a,b));