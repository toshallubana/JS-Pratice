const memoize = (fn) => {
    const cache = {};

    return (...args) => {
        if(args.toString() in cache) {
            console.log(cache);
            return cache[args.toString()];
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
}

const addMany = (...args) => args.reduce((acc,num) => acc + num);

const init = () => {
    const memoAddMany = memoize(addMany);
    console.log(memoAddMany(1,2,3,4,5));
}
init();