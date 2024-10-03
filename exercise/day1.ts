// Mendefinisikan variabel untuk soal nomor 1 & 2 (panjang dan lebar persegi panjang)
const panjang: number = 5;
const lebar: number = 3;

// 1
// mencari luas persegi panjang
const luasPersegiP: number = panjang * lebar;
console.log(luasPersegiP);

// 2
// mencari keliling persegi panjang
const kellPersegiP: number = 2 * (panjang + lebar);
console.log(kellPersegiP);

// 3
// definisikan radius lingkaran dan pi
const radius: number = 5;
// const pi: number = 22 / 7;

// mencari diameter lingkaran
const diameter: number = radius * 2;
console.log(diameter);

// mencari keliling lingkaran
const kellLingkaran: number = 2 * Math.PI * radius;
console.log(kellLingkaran);

// mencari keliling lingkaran
const luasLingkaran: number = Math.PI * (radius ** 2);
console.log(luasLingkaran);

// 4
const angle1: number = 80;
const angle2: number = 65;
const triangelsAngle = 180 - (angle1 + angle2);
console.log(triangelsAngle);

// 5
const numOfDays: number = 365;
const daysInYear: number = 365;
const daysInMonth: number = 30;
const yearsOfDays: number = Math.floor(numOfDays / daysInYear);
const monthsOfDays: number = Math.floor((numOfDays % daysInYear) / daysInMonth);
const daysOfDays: number = Math.floor((numOfDays % daysInYear) % daysInMonth);
console.log(`${yearsOfDays} years, ${monthsOfDays} months, ${daysOfDays} days`);

// 6
const date1: Date = new Date('2024-01-22');
const date2: Date = new Date('2024-01-20');
const dateInMiliseconds: number = date2.getTime() - date1.getTime();
const milisecondsInDay: number = (1000 * 3600 * 24);
const daysApart: number = Math.round(dateInMiliseconds/milisecondsInDay);
console.log(`${Math.abs(daysApart)} days apart`);