// check panagram a string
function checkPanagram(str) {

    const arr = new Array(26).fill(false);

    for(let i = 0; i < str.length; i++) {
        if(str[i] >= 'A' && str[i] <= 'Z')
            index = str.charCodeAt(i) - 'A'.charCodeAt(0);
        else if(str[i] >= 'a' && str[i] <= 'z')
            index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        else continue;
        arr[index] = true;
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == false) return false;
    }
    return true;

}
console.log(checkPanagram('The quick brown fox jumps over a lazy dog'));

// convert time 12 to 24 hours format

function convert12to24(string) {
    const [time, modifier] = string.split(" ");
    let [hours, minutes] = time.split(":");

    if(hours == '12') hours = '00';
    if(modifier == 'PM') hours = parseInt(hours) + 12;
    return `${hours}:${minutes}`;
}
console.log(convert12to24('12:00 PM'));

// LRU(Least recently used cache)

class LRU {
    constructor(max = 5) {
        this.max = max;
        this.cache = new Map();
    }

    get(key) {
        let item = this.cache.get(key);

        if(item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    }

    set(key, value){
        if(this.cache.has(key)) this.cache.delete(key);
        else if(this.cache.size == this.max) {
            this.cache.delete(this.first());
        }
        this.cache.set(key,value);
    }

    first() {
        return this.cache.keys().next().value
    }
}

const LruCache = new LRU(3);
LruCache.set('name', 'toshal');
LruCache.set('age', '25');
LruCache.set('position', 'SDE-2');
LruCache.set('Birth', '1 FEB');
console.log(LruCache.cache)