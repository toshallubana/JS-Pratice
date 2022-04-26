// Complexity // o(n * 2)

// function same(a,b){
//     if(a.length != b.length) false;
//     for(let i = 0; i < a.length; i++){
//         let correct = b.indexOf(a[i] ** 2);
//         if(correct == -1) {
//             return false;
//         }
//         b.splice(correct,1);
//     }
//     return true;
// }
// console.log(same([1,2,3],[1,4,9]));

// complexity

// function sameOpt(a,b){
//     let frequency1 = {};
//     let frequency2 = {};

//     for(let val of a){
//         frequency1[val] = (frequency1[val] || 0) + 1;
//     }

//     for(let val of b){
//         frequency2[val] = (frequency2[val] || 0) + 1;
//     }
//     for(let key in frequency1){
//         if(!(key ** 2 in frequency2)){
//             return false;
//         }
//         if(frequency2[key ** 2 ] != frequency1[key]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(sameOpt([1,2,3],[1,4,9]));

// valid anagram

// function anagram(str1,str2){
//     if(str1.length != str2.length) return false;

//     let lookup = {};

//     for(let i = 0; i < str1.length; i++){
//         let letter = str1[i];
//         lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
//     }

//     for(let j = 0; j < str2.length; j++){
//         let letter = str2[j];
//         if(!lookup[letter]){
//             return false;
//         }else{
//             lookup[letter] -= 1
//         }
//     }
//     return true;

// }
// console.log(anagram('anagram','nagaram'));

// sameFrequency

// function sameFrequency(a,b){
//     if(a.length != b.length) return false;
//     let freq1 = {};
//     let freq2 = {};
//     for(let i = 0; i < a.length; i++){
//         freq1[a[i]] = (freq1[a[i]] || 0) + 1;
//     }
//     for(let i = 0; i < b.length; i++){
//         freq2[b[i]] = (freq2[b[i]] || 0) + 1;
//     }
//     for(let key in freq1){
//         if(freq1[key] != freq2[key]) return false;
//     }
//     return true;
// }
// console.log(sameFrequency('182','281'));

// Duplicate

function isDuplicate(...args){
    let collection = {};
    for(let i = 0; i < args.length; i++){
        collection[args[i]] = (collection[args[i]] || 0) + 1;
    }
    for(let key in collection){
        if(collection[key] > 1) return false;
    }
    return true;
}
console.log(isDuplicate('a','b','c','a'));
