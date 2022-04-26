function isDuplicate(){
    return new Set(arguments).size != arguments.length;
}
console.log(isDuplicate('a','b','c'));