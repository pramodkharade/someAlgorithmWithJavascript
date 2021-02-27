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
/**Solution 1**/
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

/***Solution 2***/
 let longestWord ="";
 const findLogestWord=(str)=> {
   return str.split(" ").sort((a,b)=>b.length-a.length)[0]
   
}
let result = findLogestWord("This is Javascript Developer");
console.log("Result is::",result);

 /* 
 Sliding Window Algorithm
 Given an array of integers and a number k, find the maximum sum of a subarray of size k.
 Brute Force: O(N*K) N = Size of Array.
 
 */
const inputArr =[10,30,20,50,60,40,40];

/***Solution 1***/
const  maxSubarray = function(arr,k){
  let max = 0;
  for(let i=0;i<arr.length-k+1;i++){
    let tempMax = 0;
    for(let j=i;j<i+k;j++){
      tempMax += arr[j];
    }
    if(tempMax > max){
      max = tempMax;
    }
  }
  return max;
};
console.log(maxSubarray,3);

/***Solution 2***/

const inputArr =[10,30,20,50,60,40,40];
var maxSubarray = function(arr,k){
  let max = 0;
  let windowSum = 0;
  let windowStart=0;
  for(let windowEnd=0;windowEnd<arr.length;windowEnd++){
      windowSum+=arr[windowEnd];
      if(windowEnd>=k-1){
        max = Math.max(windowSum,max);
        windowSum -= arr[windowStart];
        windowStart++;
      }
      console.log(windowSum,max);
  }
  return max;
};
;
console.log("Max Value:",maxSubarray(inputArr,3));

