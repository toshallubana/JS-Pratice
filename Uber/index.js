// Que: - 1

// "(()"
// ")()())"

function lengthValidParanthesis(str){
    let count = 0;
    let arr = [-1];
    for(let i = 0; i < str.length; i++){
        if(str[i] == "("){
            arr.push(i);
        }else{
            arr.pop();
            if (arr.length == 0) {
                arr.push(i);
                continue;
            }

            let curr_len = i - arr.top();
 
            // update the length of the longest balanced parenthesis
            if (count < curr_len) {
                count = curr_len;
            }
        }
    }
    return count;
}
console.log(lengthValidParanthesis("(()"));