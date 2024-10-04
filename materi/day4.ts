// * ========== ARRAY ==========
// Deklarasi array
// const arr = []; // Cara 1
// const arr2 = new Array(); // Cara 2

const arr: string[] = ["A", "B", "C"];
const arr2: string[] = new Array("A", "B", "C");

// Array of Object
// const students: {name: string; email: string}[] = [
//     {key: value}
//     {name: "Budi", email: "budi@gamil.com"},
//     {name: "Siti", email: "siti@gamil.com"},
//     {name: "Joko", email: "joko@gamil.com"},
// ];

// Penamaan interface harus PascalCase dan singular
interface Address {
  street: string;
  city: string;
}

interface Student {
  name: string;
  email: string;
  hobby?: string; // '?' berarti optional
  address?: Address;
}

// type Student = { // Harus PascalCase dan singular
//     name: string;
//     email: string;
// }

const students: Student[] = [
  { name: "Budi", email: "budi@gamil.com" },
  { name: "Siti", email: "siti@gamil.com", hobby: "bermain bumble" },
  {
    name: "Joko",
    email: "joko@gamil.com",
    address: {
      street: "Pasar Kembang",
      city: "Yogyakarta",
    },
  },
];

// * ========== FOR OF ==========
const fruits: string[] = ["Apple", "Banana", "Citrus"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Hitung jumlah bilangan menggunakan for of
const numbers: number[] = [1, 2, 3, 4, 5, 6];
let result: number = 0;

for (const number of numbers) {
  result += number;
}

console.log(result);

// * ========== FUNCTION ==========
// 1. FUNCTION DECLARATION
function square(angka: number) {
  return angka * angka;
}

const squareResult: number = square(4);
console.log(squareResult);

// 2. FUNCTION EXPRESSION
const square1 = function (angka: number) {
  return angka * angka;
};

const result3 = square1(4);
console.log(result3);

// FUNCTION SCOPE
function greeting() {
  const greet: string = "Hello";
  console.log(greet);
}

greeting();

// ! console.log(greet); -> error karena variable 'greet' di define di dalam sebuah fungsi

// PARAMETER & ARGUMENT
// Variable didalam () disebut parameter
function greetPeople(name: string) {
  const greet: string = "Hello";
  return greet + " " + name;
}

// Value didalam () disebut argumen
console.log(greetPeople("Sumanto"));
console.log(greetPeople("Widodo"));

// DEFAULT PARAMETER
function multiply(a: number, b: number = 1) {
  console.log(a);
  console.log(b);
  return a * b;
}

console.log(multiply(5, 2));
console.log(multiply(5));

// REST PARAMETER
function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// NESTED FUNCTION
function getMessage(firstName: string) {
  function sayHello() {
    return "Hello " + firstName + ",";
  }

  function welcomeMessage() {
    return "Welcome to Purwadhika";
  }

  return sayHello() + " " + welcomeMessage();
}

console.log(getMessage("Mamang Kesbor"));

// CLOSURE
function greeting1(name: string) {
  const defaultMessage: string = "Hello";

  return function () {
    return defaultMessage + " " + name;
  };
}

// Fungsi tsb harus dipanggil sebanyak 2x karena secara logika ketika fungsi tsb dipanggil
// pertama kali, fungsi tersebut menghasilkan (return) fungsi, sehingga perlu
// dipanggil kembali

// Cara 1
console.log(greeting1("Windah")());

// Cara 2
const greeting1Result = greeting1("Windah");
console.log(greeting1Result());

// RECURSIVE
function countDown(number: number) {
  console.log(number);

  let nextNumber = number - 1;
  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(10);

// ARROW FUNCTION
// Contoh Function Expression
// const square1 = function (angka: number) {
//   return angka * angka;
// };

// Contoh dalam bentuk arrow function
const square2 = (angka: number) => {
  return angka * angka;
};

// atau

const square3 = (angka: number) => angka * angka;

// * ========== ARRAY BUILT-IN METHOD ==========
// JOIN -> menggabungkan valu dalam array ke dalam bentuk string
const words: string[] = ["hello", "world"];
console.log(words.join(" "));

// POP -> menghilangkan isi value paling akhir dalam array
const words2: string[] = ["hello", "world", "ahuy"];
words2.pop();
console.log(words2);

// SHIFT -> menghilangkan value paling depan dalam array
const words3: string[] = ["ahuy", "hello", "world"];
words3.shift();
console.log(words3);

// PUSH -> menambahkan value ke dalam array ke paling akhir
const words4: string[] = ["hello", "world"];
words4.push("ahuy");
console.log(words4);

// UNSHIFT -> menambahkan value ke dalam array ke paling awal
const words5: string[] = ["hello", "world"];
words5.unshift("ahuy");
console.log(words5);

// CONCAT -> menggabungkan 2 array menjadi 1 array
const concat1: string[] = ["Hello", "World"];
const concat2: string[] = ["Spontan", "Uhuy"];

console.log(concat1.concat(concat2));

// SPREAD OPERATOR (...) -> untuk mengambil isi array
const mergedArray = [...concat1, ...concat2];
console.log(mergedArray);

// SPLICE -> untuk menghapus, mengganti, atau menambahkan value pada sebuah array
const months: string[] = ["jan", "march", "april", "june"];

months.splice(1, 0, "feb"); // Menambahkan data pada index 1
console.log(months);

months.splice(4, 1, "may"); // Mengganti value pada index 4
console.log(months);

months.splice(4, 1); // Menghapus data pada index 4
console.log(months);

// SLICE -> me-return array baru dengan value yang sudah ditentukan index start dan index end dari array tsb
const cars: string[] = ["911", "Skyline", "GT-R", "RX-8", "RX-7"];
console.log(cars.slice(1, 3));

// INDEXOF -> mencari index dari value yang di cari, jika tidak ketemu akan menghasilkan -1
const cars2: string[] = ["911", "Skyline", "GT-R", "RX-8", "RX-7"];
console.log(cars.indexOf("GT-R"));
console.log(cars.indexOf("Civic"));

// SORT -> mengurutkan isi array berupa string atau number
// Versi String
const cars3: string[] = ["911", "Skyline", "GT-R", "RX-8", "RX-7"];
cars3.sort();
console.log(cars3);

// Versi number tanpa compare function -> punya kelemahan di puluhan atau ratusan
const points: number[] = [3, 5, 1, 2, 40, 6];
points.sort();
console.log(points);

// Versi number dengan compare function
const points2: number[] = [3, 5, 1, 2, 40, 6];
points2.sort((a, b) => a - b); // asc
console.log(points2);

points2.sort((a, b) => b - a); // desc
console.log(points2);

// REVERSE -> mengembalikan urutan element dalam array
const points3: number[] = [3, 5, 1, 9, 6, 20];
points3.reverse();
console.log(points3);

// FOREACH -> melakukan looping para array tapi tidak me-return apapun
const cars4: string[] = ["911", "Skyline", "GT-R", "RX-8", "RX-7"];
cars4.forEach((car, index) => {
    console.log(index);
    console.log(car);
}); // Jika mencoba untuk me-return akan undefined

// MAP -> melakukan looping seperti forEach tetapi mereturn array baru.
const cars5: string[] = ["911", "Skyline", "GT-R", "RX-8", "RX-7"];
const resutl4 = cars5.map((car) => {
    return car;
});

console.log(resutl4);

// FILTER -> melakukan looping seperti map dan menghasilkan array baru berdasarkan 
// kondisi pada return function
const ages: number[] = [3, 15, 29, 21, 40];
const result5 = ages.filter((age) => {
    return age > 20;
})

console.log(result5);

// FIND -> mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [3, 15, 29, 21, 40];
const result6 = ages2.find((age) => age > 20);
console.log(result6);

// FINDINDEX -> seperti find tetapi menghasilkan indexnya saja
const ages3: number[] = [3, 15, 29, 15, 40];
const result7 = ages3.findIndex((age) => age > 20);
console.log(result7);

// REDUCE -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array
const numbers1: number[] = [175, 50, 25, 50];
const result8 = numbers1.reduce((a, b) => a + b);
console.log(result8);

// INCLUDES -> mengecek value pada array ada apa tidak dengan hasil return adalah boolean
const cars6: string[] = ["911", "Skyline", "GT-R", "RX-8", "RX-7"];
console.log(cars6.includes("GT-R"));





