const cacheFunction = (fn) => {
    let cache = {};
    return (...args) => {
        if(args.toString() in cache) {
            return cache[args.toString()]
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result
    }
}

const needToCache = (...args) => args.reduce((acc, num) => acc + num);

// const call = needToCache(1,2,3,4,5);

const init = () => {
    const cacheValue = cacheFunction(needToCache);
    console.log(cacheValue(1,2,3,4,5))
    console.log(cacheValue(1,2,3,4,5))
}
init();



