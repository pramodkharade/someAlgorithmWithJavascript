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
  return str.split("").reverse().join(""); 
}
let result = reverseString("hello");
console.log("Result is::",result);

/***Factorial****/

let results =1;
 const factorial=(num)=> {
   
   for(let i=1; i <=num;i++){
    // console.log("I is::",num);
   results *= i;
   }
  return results; 
   
}
let result = factorial(5);

/****Find Longest Word In String****/

let longestWord ="";
 const findLogestWord=(str)=> {
   let words = str.split(" ");
   for(let word of words){
     if(word.length> longestWord.length){
       longestWord = word;
     }
     //console.log("Word is::", words);
   }
   
  return longestWord; 
   
}
let result = findLogestWord("This is Javascript Developer");
console.log("Result is::",result);

