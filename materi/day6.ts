// * ========== OBJECT
// Cara 1
const user = {};

// Cara 2 - Jarang digunakan
const user2 = new Object();

// * Properties & Method
interface User {
  name: string;
  greet: () => void;
  hobby?: string; // Optional - bisa diisi atau tidak
  greet2?: () => void;
}

// const user3: User = {
//   // Properties
//   name: "Budi",
//   hobby: "Bermain tinder",
//   // Method
//   greet: () => {
//     console.log("Hello");
//   },
//   greet2() {
//     console.log("Hello");
//   },
// };

// * Add & Delete Property
// Add Property
const person: any = {
  name: "joko",
  age: 20,
};

console.log(person);
person.hobby = "Tadarus";
console.log(person);
person["address"] = "Godean";
console.log(person);

// Delete Property
delete person.address;
console.log(person);

// * Accesing value & key
console.log(person.name);
console.log(person["name"]);

console.log(Object.keys(person));
console.log(Object.values(person));

// * ========== IMMUTABLE & MUTABLE
// * Mutable
const count1: number = 4;
let count2: number = count1;
count2 = 10;

console.log(count1);
console.log(count2);

// * Immutable
let orang1: any = {
  name: "Budi",
};

let orang2: any = orang1;

console.log(orang1);
console.log(orang2);

orang2.age = 20;

console.log(orang1);
console.log(orang2);

// * Spread Operator
// -> Meng-copy isi object/array ke object/array baru, sehingga tidak saling terhubung
let orang3: any = { ...orang1 };
orang3.hobby = "Madangi Sing Turu";
console.log(orang1);
console.log(orang3);

// * ========== OPTIONAL CHAINING
const user4: any = {};
// ! console.log(user4.address.street); -> Error
console.log(user4.address?.street);

// * ========== FOR IN
const person3 = {
  name: "Koh Aceng",
  age: 90,
};

for (const key in person3) {
  console.log(key);
  console.log(person3[key]);
}

// * ========== DESTRUCTURING ASSIGNMENT
// Object
const person4 = {
  name: "Ateng",
  age: 27.5,
  hobby: "Berdagang",
};

console.log(person4.name);
console.log(person4.age);

const { name, hobby } = person4;
console.log(name);
console.log(hobby);

// Array
const array: number[] = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = array;
console.log(a);
console.log(b);

// * ========== SPREAD OPERATOR
// digunakan untuk copy isi object
// Jika ada key yang sama maka akan ditimpa oleh object kanannya
const objectOne = { name: "ifink", password: "Admin123" };
const objectTwo = { email: "example@gmail.com", name: "ufink" };

const combine = { ...objectOne, ...objectTwo };

console.log(combine);

// * ========== THIS KEYWORD
// mengakses property lain di dalam sebuah object
const person5 = {
  firstName: "Mamang",
  lastName: "Spakbor",
  greet() {
    console.log(`Hello, ${this.firstName}`);
  },
};

person5.greet();

// * ========== CLASS ==========
// * Class Declaration
class User1 {
  greeting() {
    console.log("Hello World!");
  }
}

// * Class Expression
const User2 = class {
  greeting() {
    console.log("Hello World!");
  }
};

const human: User1 = new User1();

human.greeting();

// * Constructor & Access Modifier
class Person {
  name: string;
  #password: string; // tambahkan '#' pada nama property untuk mem-private

  constructor(name: string, password: string) {
    this.name = name;
    this.#password = password;
  }

  greeting() {
    console.log(`Hello ${this.name}`);
  }

  private showPassword() {
    console.log(this.#password);
  }

  passwordChanged() {
    return this.showPassword();
  }
}

const orang4 = new Person("Junet Mayoret", "PasswordGue");
orang4.greeting();
// ! orang4.showPassword();
orang4.passwordChanged();

console.log(orang4.name);
// ! console.log(orang4.password);
// ! console.log(orang4.#password);

// * Setter & Getter - jarang dipakai
const orang5 = {
  firstName: "Richard",
  lastName: "Michat",

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter
  set fullName(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },
};

console.log(orang5.fullName);
orang5.fullName = "Kunto Prapto";
console.log(orang5.fullName);

// * ========== INHERITANCE ==========
class Product {
  productName: string;
  price: number;

  constructor(name: string, price: number) {
    this.productName = name;
    this.price = price;
  }

  readPrice() {
    console.log(this.price);
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(this.price);
  }
}

// ! tidak menggunakan konsep inheritance
// class Book{
//     productName: string;
//     price: number;
//     author: string;

//     constructor(name: string, price: number, author: string){
//         this.productName = name;
//         this.price = price;
//         this.author = author
//     }
// }

class Book extends Product {
  author: string;

  constructor(name: string, price: number, author: string) {
    super(name, price);
    this.author = author;
  }
}

const buku: Book = new Book("Cara Jago", 100_000, "Pidi Jahad");

console.log(buku.readPrice());

// * ========== INSTANCEOF ==========
// Melakukan pengecekan apakah sebuah object memiliki hubungan ke class tertentu
class Animal {}
class Rabbit extends Animal{}
class Tree {}

const hop: Rabbit = new Rabbit();

console.log(hop instanceof Rabbit);
console.log(hop instanceof Animal);
console.log(hop instanceof Tree);

