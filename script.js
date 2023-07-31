"use strict";

// 1.Given an array of integers, rearrange the elements in a way that all the even numbers come before the odd numbers.

const rearrangeEvenOdd = (arr) => {
  const evenArr = [];
  arr.forEach((element, index) => {
    if (element % 2 === 0) {
      evenArr.push(element);
      arr.splice(index, 1);
    }
  });
  arr.unshift(...evenArr);
  return arr;
};
console.log(
  `problem 1:>>>> \n\nTest data 1 : i/p [5, 3, 8, 2, 7] o/p is --> ${rearrangeEvenOdd(
    [5, 3, 9, 2, 7]
  )}\n\nTest data 2 : i/p [10, -5, 0, 15, 20] o/p is --> ${rearrangeEvenOdd([
    10, -5, 4, 15, 20,
  ])}`
);

// 2. Write a function to find the missing number in an array of integers from 1 to N.

const findMissingNumber = (arr) => {
  let num = 0;
  let flag = false;
  for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      num = i;
      break;
    }
  }
  return num;
};
console.log(
  `problem 2:>>>> \n\nTest data 1 : i/p [1, 2, 4, 5] o/p is --> ${findMissingNumber(
    [1, 2, 4, 5]
  )}\n\nTest data 2 : i/p [10, 7, 3, 5, 8, 1, 4, 6, 2] o/p is --> ${findMissingNumber(
    [10, 7, 3, 5, 8, 1, 4, 6, 2]
  )}`
);

// 3. Given a string with parentheses, check if it is balanced (each opening parenthesis has a corresponding closing parenthesis).

const isBalancedParentheses = (str) => {
  return str.length % 2 === 0 ? true : false;
};
console.log(`problem 3 :>>>> \n\n
Test data 1 : i/p "(()(()))" o/p is --> ${isBalancedParentheses(
  "(()(()))"
)}\n\nTest data 2 : i/p "(()(())))" o/p is --> ${isBalancedParentheses(
  "(()(())))"
)}`);

// 4. Implement a function to convert a decimal number to its binary representation.

const decimalToBinary = (number) => {
  return number.toString(2);
};
console.log(`problem 4 :>>>> \n\n
Test data 1 : i/p 10 o/p is --> ${decimalToBinary(
  10
)}\n\nTest data 2 : i/p 25 o/p is --> ${decimalToBinary(25)}`);

// 5. Implement a function that returns the longest word in a sentence.
const longestWord = (str) => {
  let long = 0;
  let longestStr = "";
  let arr = str.split(" ");
  arr.forEach((element) => {
    element.length > long ? (longestStr = element) : "";
  });
  return longestStr;
};

console.log(`problem 5:>>>> \n\n
Test data 1 : i/p "I love programming" o/p is --> ${longestWord(
  "I love programming"
)}\n\nTest data 2 : i/p "JavaScript is diffcult" o/p is --> ${longestWord(
  "JavaScript is diffcult"
)}`);

// 7. Write a function to check if a given string contains only unique characters (no repeating characters).

const areCharactersUnique = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count > 0) {
      break;
    }
  }
  return count === 0 ? true : false;
};

console.log(`problem 7:>>>> \n\n
Test data 1 : i/p "hello " o/p is --> ${areCharactersUnique(
  "hello"
)}\n\nTest data 2 : i/p "world" o/p is --> ${areCharactersUnique("world")}`);

// 8. Given an array of integers and a target sum, find the index of two numbers that add up to the target sum.

const twoSum = (arr, sum) => {
  let index1 = 0,
    index2 = 0,
    flag = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        index1 = i;
        index2 = j;
        flag = true;
        break;
      }
    }
  }
  return flag === true ? [index1, index2] : "not matching sum value";
};
console.log(`problrm 8: ${twoSum([2, 7, 11, 15], 9)} ${twoSum([3, 2, 4], 6)}`);

// 9.Write a function that generates all possible combinations of a given string.

const allCombinations = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      arr.push(str.slice(i, j));
    }
  }
  return arr;
};
console.log(`problem 9: ${allCombinations("abc")}${allCombinations("dog")}`);

// 10. Given a string, find the most frequent character(s) and their count(s).

const mostFrequentCharacter = (str) => {
  let obj = {};
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (!obj.hasOwnProperty(str[i])) {
      obj[str[i]] = count;
    }
    count = 1;
  }
  return obj;
};

console.log(`problem 10 :>>>> \n\n
Test data 1 : i/p "hello" o/p is -->`);
console.log(mostFrequentCharacter("hello"));
console.log(`Test data 2 : i/p "abracadabra" o/p is --> `);
console.log(mostFrequentCharacter("abracadabra"));
