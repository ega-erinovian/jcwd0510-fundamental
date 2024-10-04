// 1
const number: number = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i}`);
}

// 2
const word: string = "madam";
// Cara 1 - Built-In Method
const reversedStr: string = word.split("").reverse().join("");
console.log(word === reversedStr ? "Palindrome" : "Not Palindrome");

// Cara 2 - Tanpa Built-In Method
let reverse: string = "";

for (let i = word.length - 1; i >= 0; i--) {
  reverse += word[i];
}

console.log(word === reverse ? "Palindrome" : "Not Palindrome");

// 3
const centimeter: number = 100000;
console.log(`${centimeter / 100000} km`);

// 4
const money: number = 1000000;
// Cara 1
console.log(`Rp. ${money.toLocaleString()},00`);

// Cara 2
const result: string = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
}).format(money);

console.log(result);

// 5
const rString: string = "Hello World";
const searchStr: string = "ell";
console.log(rString.replace(searchStr, ""));

// * 6 (Company Coding Test)
const sentence: string = "hello world";
let words: string[] = sentence.split(" "); // Array of string

for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
console.log(words.join(" "));

// 7
let sentence2: string = "The QuiCk BrOwN Fox";

// Cara 1
let words2: string[] = sentence2.split("");

for (let i = 0; i < words2.length; i++) {
  if (words2[i] === words2[i].toUpperCase()) {
    words2[i] = words2[i].toLowerCase();
  } else {
    words2[i] = words2[i].toUpperCase();
  }
}

console.log(words2.join(""));

// Cara 2
let swappedString: string = "";

for (let i = 0; i < sentence2.length; i++) {
  if (sentence2[i] === sentence2[i].toUpperCase()) {
    swappedString += sentence2[i].toLowerCase();
  } else {
    swappedString += sentence2[i].toUpperCase();
  }
}

console.log(swappedString);

// 8
const num1: number = 27;
const num2: number = 28;
console.log(Math.max(num1, num2));

// 9
const sortNum1: number = 18;
const sortNum2: number = 27;
const sortNum3: number = 42;

const maxNum: number = Math.max(sortNum1, sortNum2, sortNum3);
const minNum: number = Math.min(sortNum1, sortNum2, sortNum3);
const midNum: number = sortNum1 + sortNum2 + sortNum3 - maxNum - minNum;

console.log(`${minNum}, ${midNum}, ${maxNum}`);

// 10
const variable: string = "Hello";
switch (typeof variable) {
  case "string":
    console.log(1);
    break;
  case "number":
    console.log(2);
    break;
  default:
    console.log(3);
    break;
}

// 11
const inputStr: string = "An apple a day keeps the doctor away";
console.log(inputStr.toLowerCase().replaceAll("a", "*"));
