/***
Problem Statement
1. Reverse a String Algorithm

***/

/***Solution 1**/
 let reversedStr="";
 const reverseString=(str)=> {
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  
  return reversedStr;
}


let result = reverseString("hello");
console.log("Result is:",result);

/***Solution 2****/
 let reversedStr="";
 const reverseString=(str)=> {
  reversedStr = str.split("").reverse().join(""); 
  return reversedStr;
}
let result = reverseString("hello");
console.log("Result is::",result);

