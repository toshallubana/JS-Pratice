const debounce = function(cb,limit) {
    let timer;
    return function(...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            cb(...args)
        }, limit);
    }
}