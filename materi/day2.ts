// * ========== IF STATEMENT ==========
const age1: number = 18;
if (age1 >= 17) {
  console.log("Anda sudah legal.");
}
// kalau cuma 1 line bisa ditulis seperti dibawah ini
// if (age1 >= 17) console.log("Anda sudah legal.");


// * ========== ELSE STATEMENT ==========
const age2: number = 15;
if (age2 >= 17) {
  console.log("Anda sudah legal.");
} else {
  console.log("Anda masih dibawah umur.");
}

// * ========== ELSE IF STATEMENT ==========
const input: string = "";
const grade: string = input.toUpperCase().replaceAll(" ", "");

if (grade === "A") {
  console.log("Nilai bagus");
} else if (grade === "B") {
  console.log("Nilai lumayan");
} else if (grade === "C") {
  console.log("Nilai cukup");
} else if (grade === "") {
  console.log("Nilai kosong");
} else {
  console.log("Bodoh");
}

// * ========== SWITCH CASE STATEMENT ==========
const day: string = "senin";

switch (day) {
  case "senin":
    console.log("Hari senin");
    break;
  case "selasa":
    console.log("Hari selasa");
    break;
  case "rabu":
    console.log("Hari rabu");
    break;
  default:
    console.log("Hari tidak ditemukan");
    break;
}

// * ========== LOGICAL OPERATOR ==========
// OR (||)
const car: string = "mercy";

if (car === "bmw" || car === "mercy" || car === "ford") {
  console.log("Mobil Eropa");
} else {
  console.log("mobil jepang");
}

// AND (&&)
const umur: number = 16;
const isPunyaSIM: boolean = false;

// if(umur >= 17 && isPunyaSIM === true){
if (umur >= 17 && isPunyaSIM) {
  console.log("Boleh bawa kendaraan");
} else {
  console.log("Belum boleh bawa kendaraan");
}

// NOT (!)
const isSunny: boolean = true;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// * ========== TERNARY OPERATOR ==========
const str: string = "javascript";

// IF ELSE
if (str === "javascript") {
  console.log("Javascript");
} else {
  console.log("Not javascript");
}

console.log(str === "javascript" ? "javascript" : "not javascript");

// ELSE IF -> tidak disarankan karena kesulitan untuk dibaca ketika sudah chaining.
console.log(
  str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
);

// * ========== LOOP STATEMENT ==========
// FOR LOOP
for (let i = 0; i < 5; i++) {
  console.log("Hello");
}

// WHILE LOOP
let i: number = 0;

while (i < 3) {
  console.log("Hello World");
  i++;
}

// DO WHILE LOOP
let count: number = 0;

do {
  console.log(`Ini iterasi ke ${count}`);
  count++;
} while (count <= 3);

// Hint: while dan do while gapernah kepake waktu develop project. Tapi bakal ditanyain waktu selection test.

// * ========== BREAK ==========
let sum: number = 0;

while (true) {
  console.log(`sum: ${sum}`);
  if (sum >= 5) break;
  sum++;
}

// * ========== CONTINUE ==========
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}


