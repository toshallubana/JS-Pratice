// Input:
// {([])}
// Output: 
// true
// Explanation: 
// { ( [ ] ) }. Same colored brackets can form 
// balaced pairs, with 0 number of 
// unbalanced bracket.

// function cmp(b, c){
//     if(b=='{' && c=='}')
//         return true;
//     else if(b=='[' && c==']')
//         return true;
//     else if(b=='(' && c==')')
//         return true;
//     return false;
// }

// function balance(x) {
//     const arr = [];
//     let top = -1;
//     for(let i = 0; i < x.length; i++) {
//         if(x[i] == '[' || x[i] == '{' || x[i] == '('){
//             arr.push(x[i]);
//             top++;
//         }else if(x[i] == ']' || x[i] == '}' || x[i] == ')'){
//             if(top == -1 || !cmp(arr[top], x[i])) return false;
//             else {
//                 arr.pop();
//                 top--;
//             }
//         }
//     }
//     if(top == -1) return true;
//     else return false;
// }
// console.log(balance('{([])}'));

// IPv4 address = 222.111.111.111

// const validateIp = (ip) => {
//     const arrIp = ip.split('.');
//     if(arrIp.length > 4 || arrIp.length < 4) return 0;
//     for(let i = 0; i < ip.length; i++){
//         if((ip[i].length >=2 && ip[i].length <=2) && ip[i]>255){
//             return 0;
//         }
//     }
//     return 1;
// }
// console.log(validateIp('5555..555'));

// Input:
// s = Geeks
// Output: skeeG

// const reverse = (string) => {
//     let str = '';
//     for(let i = string.length - 1; i >= 0; i--) {
//         str+= '' + string[i];
//     }
//     return str;
// }
// console.log(reverse('Geeks'));

// palindrome

// const palindrome = (string) => {
//     let i = 0;
//     let j = string.length - 1;
//     while(i < j) {
//         if(string[i] != string[j]) {
//             return 0;
//         }
//         i++;
//         j--;
//     }
//     return 1;
// }
// console.log(palindrome('abcba'))

// Input:
// s = GeeksForGeeks, x = Fr
// Output: -1
// Explanation: Fr is not present in the
// string GeeksForGeeks as substring.

// const findNumber = (str,x) => {
//     for(let i = 0; i < x.length; i++) {
//         for(let j = 0; j < str.length; j++) {
//             if(x[i] == str[j]) {
                
//             }
//         }
//     }
// }
// console.log(findNumber('GeeksForGeeks'));

// check redundent

function redundantBrackets(string) {
    let stack = [];
    for(let i = 0; i < string.length - 1; i++) {
        let ch = string[i];

        if(ch == '(' || ch == '*' || ch == '/' || ch == '+' || ch == '-') {
            stack.push(ch);
        }else {
            if(ch == ')') {
                let isRedundant = true;
                while(stack[stack.length - 1] != '(') {
                    let top = stack[stack.length - 1];
                    if(top == '*' || top == '/' || top == '+' || top == '-') {
                        isRedundant = false;
                    }
                    stack.pop();
                }
                if(isRedundant) return true;
                stack.pop();
            }
        }
    }
    return false;
}
console.log(redundantBrackets('(a + (b * c))'))