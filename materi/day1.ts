// versi JS
// const message = "Hello World";

// versi TS
const message: string = "Hello World";
// ! const message: string = 100; -> Error

// *===== STRING BUILT-IN METHOD 
const orang: string = "Siregar";
const orang2: string = "Budiono";

// toLowerCase()
const orangLowerCase: string = orang.toLowerCase();
console.log(orangLowerCase);

// toUpperCase()
const orangUpperCase: string = orang.toUpperCase();
console.log(orangUpperCase);

// replace()
const orangReplaced: string = orang.replace('r', 'l'); // akan mengubah char/string pertama yang dia temukan
console.log(orangReplaced);

// replaceAll() -> butuh setting config
const orangReplacedAll: string = orang.replaceAll('r', 'l'); // akan mengubah semua char/string yang dia temukan
console.log(orangReplacedAll);

// split() -> memisahkan string berdasarkan delimiter dalam argumen sebagai array
console.log(orang.split(""));

const orangSplit: string = "Mamang Kesbor";
console.log(orangSplit.split(" "));

// concat -> menggabungkan 2 string atau lebih (dengan chaining a.concat(b).concat(c))
const orangConcatinated: string = orang.concat(orang2);
console.log(orangConcatinated);

// slice()
const orangSliced: string = orang.slice(0, 3);
// const orangSliced: string = orang.slice(1);
console.log(orangSliced);

// *===== TEMPLATE LITERALS / TEMPLATE STRING
const nama4: string = "Jack";
const message1: string = `Welcome ${nama4}`;
console.log(message1);
console.log("Welcome" + " " + nama4); // tanpa template literals

// *====== NUMBER BUILT IN METHOD
const angka: string = "2000";

// Number() -> konversi tipe data lain ke number
console.log(Number(angka));
console.log(typeof Number(angka));

// parseInt() -> sama seperti Number()
console.log(parseInt(angka));
console.log(typeof parseInt(angka));

// MAX_VALUE or MIN_VALUE -> gapernah kepake (good to know)
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// *===== TYPE CONVERSION
// String conversion
console.log(String(123));
console.log(typeof String(123));

const angka1: number = 20;
console.log(angka1.toString());
console.log(typeof angka1.toString());

// Boolean conversion
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(12));
console.log(Boolean(-12));
console.log(Boolean(""));
console.log(Boolean(" "));

// *===== DATE DATA TYPES
// Mengambil tanggal hari ini
const now: Date = new Date();
console.log(now);

// get method -> digunakan untuk 'mengambil'
// Mengambil tahunnya
console.log(now.getFullYear());

// Mengambil bulannya -> defaultnya start dari 0 (0: Januari, 1: Februari, dst)
console.log(now.getMonth() + 1);

// Mengambil tanggalnya
console.log(now.getDate());

// Mengambil waktu hari ini dalam miliseconds
console.log(now.getTime());

// set method
now.setDate(11);
now.setMonth(8); // akan otomatis bertambah 1
now.setFullYear(1995);
console.log(now);

// *===== BASIC OPERATOR
console.log(1 + 1); // tambah
console.log(2 - 1); // kurang
console.log(2 * 3); // kali
console.log(9 / 3); // bagi
console.log(9 % 2); // modulo atau sisa bagi
console.log(2 ** 3); // pangkat

const a: number = 10;
const b: number = 20;
const c: number = a + b;
console.log(c);

// *===== MODIFY IN PLACE
let n: number = 4;
n += 2; // -> n = n + 2 -> n = 4 + 2 = 6
n *= 2; // -> n = n + 2 -> n = 6 * 2 = 12

console.log(n);

// *===== INCREMENT & DECREMENT
let counter: number = 2;
// Increment
// counter++;

// decrement
counter--;
console.log(counter);

// *===== POSTFIX & PREFIX
let counter2: number = 3;
// Prefix -> ditambahkan dlu baru ditampilkan
// console.log(++counter2);

// Postfix -> ditampilkan dlu tetapi dibelakang layar sudah ditambah
console.log(counter2++);
console.log(counter2);

// *===== COMPARISON OPERATORS (Selection Test Question)
// equal to (==) -> hanya membandingkan nilainya
// strict equality (===) -> membandingkan nilai dan tipe datanya

// *===== MATH -> Javascript's built in object
// Math ceil -> membulatkan angka ke atas
console.log(Math.ceil(4.3));

// Math floor -> membulatkan angka ke bawah
console.log(Math.floor(4.8));

// Math round -> membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.5));
console.log(Math.round(4.4));

// Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1, 2, 3, 4, 9, 5));

// Math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(2, 1, 3, 4, 9, 5));

// Math abs -> Mengembalikan angka positif
console.log(Math.abs(-10));

// Math random -> Mengembalikan angka acak antara 0 dan 1
console.log(Math.random());


