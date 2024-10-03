// 1 - Ganjil Genap
const oddEven: number = 5;
console.log(oddEven % 2 === 0 ? `${oddEven} is even` : `${oddEven} is odd`);

// 2 - Bilangan Prima
const input: number = 7;
const angka: number = Math.floor(input);
let isPrima: boolean = true;
// Cek angka harus lebih dari 1, karena prima dimulai dari 2
if (angka > 1) {
  // Bilangan asli lebih dari 1
  for (let i = 2; i < angka; i++) {
    // Mengecek apakah 'angka' bisa dibagi angka selain 1 dan angka itu sendiri
    if (angka % i === 0) {
      /* 
        Jika bisa maka ubah isPrima menjadi false lalu hentikan loop (break) karena sudah
        ketahuan bahwa angka tersebut bisa dibagi selain 1 dan angka itu sendiri 
      */
      isPrima = false;
      break;
    }
  }
} else {
  // Jika angka tidak lebih dari 1 maka bukan prima
  isPrima = false;
}

console.log(
  isPrima ? `${angka} adalah bilangan prima` : `${angka} bukan bilangan prima`
);

// 3
const N: number = 3;
let hasil: number = 0;
let perhitunganN: string = "";

// Cara 1
for (let i = 1; i <= N; i++) {
  perhitunganN =
    i <= N - 1 ? (perhitunganN += `${i} + `) : (perhitunganN += `${i} `);
  hasil += i;
}

console.log(`N = ${perhitunganN} = ${hasil}`);

// Cara 2
const hasil2: number = (N * (N + 1)) / 2; // rumus
console.log(hasil2);

// 4
// Deklarasi variabel untuk faktorial, hasil, dan string untuk proses faktorial
const factorial: number = 4;
let hasilFactorial: number = 1;
let perhitunganFactorial: string = "";
for (let i = factorial; i > 0; i--) {
  // string sebagai penampung untuk menampilkan proses faktorialnya
  perhitunganFactorial =
    i > 1
      ? (perhitunganFactorial += `${i} * `)
      : (perhitunganFactorial += `${i} `);

  // Menghitung faktorial
  hasilFactorial *= i;
}

console.log(`!${factorial} = ${perhitunganFactorial} = ${hasilFactorial}`);

// 5 - Fibonacci
// 0 1 1 2 3 5 8 ...
const fibonacciN: number = 15;
let next: number = 0;
let prev: number = 0;
let current: number = 1; 
let perhitunganFib: string = "0, 1, ";
for (let i = 1; i < fibonacciN; i++) {
  // rumus fibo adalah uNext = uPrev + uCurrent
  next = prev + current;
  // agar fibonaci dapat bergeser maka dilakukan penukaran nilai
  prev = current;
  current = next;

  perhitunganFib =
    i < fibonacciN - 1
      ? (perhitunganFib += `${next}, `)
      : (perhitunganFib += `${next}`);
}

console.log(`Fibonacci(${fibonacciN}) = ${perhitunganFib}`);
console.log(next);

console.log("Hello");
