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


// const callMe = new Promise((resolve, reject) => {
//   if (false) {
//     resolve("Resolved me");
//   } else {
//     reject("rejected me");
//   }
// });

// callMe
//   .then((res) => console.log("result", res))
//   .catch((err) => console.log("error:", err));

// const callMeAsych = async function (arr) {
//   if (arr) {
//     return "resolved";
//   } else {
//     return "rejected";
//   }
// };

// (async () => {
//   return console.log(await callMeAsych(true));
// })();

function thirdTimeComplexityLargest(arr) {
  // check arr length atleast 3
  if (arr.length < 3) {
    return;
  }

  // find first largest number
  let first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > first) {
      first = arr[i];
    }
  }

  // find second number
  let second = Number.MIN_VALUE;
  for (let s = 0; s < arr.length; s++) {
    if (arr[s] > second && arr[s] < first) {
      second = arr[s];
    }
  }

  // find thrid number
  let third = Number.MIN_VALUE;
  for (let t = 0; t < arr.length; t++) {
    if (arr[t] > third && arr[t] < second) {
      third = arr[t];
    }
  }
  console.log(first, second, third);
}

thirdTimeComplexityLargest([22, 23, 24, 23, 12, 30]);

function thirdSnTcomplexity(arr) {
  let first = arr[0],
    second = -10000,
    third = -10000;
  for (let i = 0; i < arr.length; i++) {
    // if current element is greater than first,second and thrid update values
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    }
    // arr[i] is between first and second
    else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) {
      third = arr[i];
    }
  }
  console.log("Third Highest:", third);
}
thirdSnTcomplexity([20, 19, 21, 23, 12, 30]);

// Most repeated char
// time complexity n2 Solution:1
function mostRepeatedChar(str) {
  let highestChar = null;
  let highestCount = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!/[a-zA-Z]/.test(char)) continue;
    let occurance = 0;
    for (let j = i; j < str.length; j++) {
      if (str[j] === char) {
        occurance++;
      }
    }
    if (occurance > highestCount) {
      highestCount = occurance;
      highestChar = char;
    }
  }
  return highestChar;
}
console.log("Repated Char:", mostRepeatedChar("324323423rtrttuuoopp"));

// time complexity n0 Solution:2

function mostRepeatedCharSol(str) {
  let highestChar = null;
  let highestCount = 0;
  let charDic = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!/[a-zA-Z]/.test(char)) continue;

    charDic[char] = (charDic[char] || 0) + 1;

    if (charDic[char] > highestCount) {
      highestCount = charDic[char];
      highestChar = char;
    }
  }
  console.log("Char Dic:", charDic);
  return highestChar;
}

console.log("Repated Char Sol::", mostRepeatedCharSol("324323423rtrttuuoopp"));


