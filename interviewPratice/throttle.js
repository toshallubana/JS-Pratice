const throttle = function(fn, limit) {
    let flag = true;
    return function(...args) {
        if(flag) {
            flag = false;
            fn(...args)
            timer = setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}