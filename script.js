// answer to the question no 1

function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(25));

// answer to the question no 2

function isEven(num) {
  const numType = num % 2 === 0;
  return numType;
}

// console.log(isEven(4));
// console.log(isEven(9));

// answer to the question no 3

function sum(a, b) {
  const sumValue = a + b;
  return sumValue;
}

// console.log(sum(3, 4));
// console.log(sum(10, 20));

// answer to the question no 4

function findSmallestNum(arr) {
  const smallestNum = Math.min(...arr);
  return smallestNum;
}

// console.log(findSmallestNum([3, 5, 1, 9]));
// console.log(findSmallestNum([-1, -5, 0, 10]));

// answer to the question no 5

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count += 1;
    }
  }
  return count;
}

// console.log(countVowels("hello world"));
// console.log(countVowels("Javascript"));

// answer to the question no 6

function getFirstElement(arr) {
  const firstElem = arr[0];
  return firstElem;
}

// console.log(getFirstElement([1, 2, 3]));
// console.log(getFirstElement(["a", "b", "c"]));

// answer to the question no 7

function isArrayEmpty(arr) {
  const isEmpty = arr.length === 0;
  return isEmpty;
}

// console.log(isArrayEmpty([]));
// console.log(isArrayEmpty([1, 2, 3]));

// answer to the question no 8

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialize(num - 1);
}

// console.log(factorialize(5));
// console.log(factorialize(7));

// answer to the question no 9

function reverseString(str) {
  const reversedString = str.split("").reverse().join("");
  return reversedString;
}

// console.log(reverseString("hello"));
// console.log(reverseString("world"));

// answer to the question no 10

function toLowerCase(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr;
}

// console.log(toLowerCase("HELLO WORLD"));
// console.log(toLowerCase("JavaScript"));

// answer to the question no 11

function stringLength(str) {
  const strLength = str.length;
  return strLength;
}

// console.log(stringLength("hello"));
// console.log(stringLength("world"));

// answer to the question no 12

function mergeArrays(arr1, arr2) {
  const mergedArrays = arr1.concat(arr2);
  return mergedArrays;
}

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// console.log(mergeArrays(["a", "b"], ["c", "d"]));

// answer to the question no 13

function getLastElement(arr) {
  const lastElem = arr[arr.length - 1];
  return lastElem;
}

// console.log(getLastElement([1, 2, 3]));
// console.log(getLastElement(["a", "b", "c"]));

// answer to the question no 14

function getFirstCharacter(str) {
  const firstChar = str[0];
  return firstChar;
}

// console.log(getFirstCharacter("hello"));
// console.log(getFirstCharacter("world"));

// answer to the question no 15

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(sumArray([1, 2, 3, 4]));
// console.log(sumArray([-1, -2, -3, -4]));
// console.log(sumArray([1.5, 2.5, 3.5]));
