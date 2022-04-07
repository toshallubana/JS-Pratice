// silent and listen check anagram

let str1 = "silent";
let str2 = "listen";

function anagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let strArr1 = str1.split("");
  let strArr2 = str2.split("");

  let result = false;
  for (let i = 0; i < str1.length; i++) {
    if (strArr2.includes(strArr1[i])) {
      result = true;
    } else {
      return result;
    }
  }
  return result;
}
console.log(anagram(str1, str2));
