// 1
// Pseudocode
// Create an interface for students[] object
interface Student {
  name: string;
  email: string;
  age: Date;
  score: number;
}

// Create an object of student
const students: Student[] = [
  {
    name: "Agus Shockdart",
    email: "agusschokdart@gmail.com",
    age: new Date("2000-11-03"),
    score: 89.6,
  },
  {
    name: "Joko Satchel",
    email: "jokosatchel@gmail.com",
    age: new Date("2001-10-10"),
    score: 76.5,
  },
];

// Create a function to calculate student[] data
// This function take parameter of students[]
function calculateData(students: Student[]) {
  // Create syntax to find the highest, lowest, and average of the properties score
  const agesNum: number[] = [];

  // Convert birthdate to age
  students.forEach((student) => {
    const ageDifMs = Date.now() - new Date(student.age).getTime();
    const ageDate = new Date(ageDifMs);
    agesNum.push(Math.abs(ageDate.getUTCFullYear() - 1970));
  });

  const highestAge: number = Math.max(...agesNum);
  const lowestAge: number = Math.min(...agesNum);
  const averageAge: number = agesNum.reduce((a, b) => a + b) / agesNum.length;

  //   Create object age
  const ages: { highest: number; lowest: number; average: number } = {
    highest: highestAge,
    lowest: lowestAge,
    average: averageAge,
  };

  const scoresArr: number[] = [];
  for (const key in students) {
    scoresArr.push(students[key].score);
  }

  const highestScore: number = Math.max(...scoresArr);
  const lowestScore: number = Math.min(...scoresArr);
  const averageScore: number =
    scoresArr.reduce((a, b) => a + b) / scoresArr.length;

  const scores: { highest: number; lowest: number; average: number } = {
    highest: highestScore,
    lowest: lowestScore,
    average: averageScore,
  };
  return { ages, scores };
}

// this function return objects with 2 properties: Score{}, Age{}
console.log(calculateData(students));

interface Student2 {
  name: string;
  email: string;
  age: number;
  score: number;
}

// Versi pakai class
class CalculateStudent {
  students: Student2[];

  constructor(students: Student2[]) {
    this.students = students;
  }

  calculate() {
    let maxScore: number,
      minScore: number,
      avgScore: number,
      maxAge: number,
      minAge: number,
      avgAge: number;

    const sumStudentScore = this.students.reduce((a, b) => a + b.score, 0); // 0 merupakan initial value untuk a
    const sortStudentByScore = this.students.sort((a, b) => a.score - b.score);
    minScore = sortStudentByScore[0].score;
    maxScore = sortStudentByScore[sortStudentByScore.length - 1].score;
    avgScore = sumStudentScore / this.students.length;

    const sumStudentAge = this.students.reduce((a, b) => a + b.age, 0); // 0 merupakan initial value untuk a
    const sortStudentByAge = this.students.sort((a, b) => a.age - b.age);
    minAge = sortStudentByAge[0].age;
    maxAge = sortStudentByAge[sortStudentByScore.length - 1].age;
    avgAge = sumStudentAge / this.students.length;

    return [{age: {lowest: minAge, highest: maxAge, average: avgAge}, score: {lowest: minScore, highest: maxScore, average: avgScore}}]
  }
}

const students2: Student2[] = [
  {
    name: "Agus Shockdart",
    email: "agusschokdart@gmail.com",
    age: 23,
    score: 89.6,
  },
  {
    name: "Joko Satchel",
    email: "jokosatchel@gmail.com",
    age: 25,
    score: 76.5,
  },
];

console.log(new CalculateStudent(students2).calculate());


// 2
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  total: number;
  products: { name: string; price: number; quantity: number }[] = [];
  quantity: number;

  addToCart(product: Product, quantity: number) {
    // Tambah kondisi jika barang dalam cart sudah ada.
    let isExist: boolean = false;
    let indexExist: number = 0;

    this.products.forEach((item, index) => {
      if(item.name === product.name){
        isExist = true;
        indexExist = index;
      }
    });
    
    if(isExist){
      this.products[indexExist].quantity += quantity;
    } else{
      this.products.push({
        name: product.name,
        price: product.price,
        quantity: quantity,
      });
      
    }
  }

  getTotal() {
    this.total = 0;
    this.products.forEach((product) => {
      this.total += product.price * product.quantity;
    });

    return this.total;
  }

  checkOut(userMoney: number) {
    const totalPay: number = this.getTotal();
    if(userMoney < totalPay){
      return {message: "Gaya doang, duit kurang."}
    } else {
      return { items: this.products, total: `Rp ${totalPay.toLocaleString("id-ID")},00`, payed: `Rp ${userMoney.toLocaleString("id-ID")},00`, change: `Rp ${(userMoney - totalPay).toLocaleString("id-ID")},00` };
    }
  }
}

const transaction1: Transaction = new Transaction();
transaction1.addToCart(new Product("Kursi RGB", 1_000_000), 2);
transaction1.addToCart(new Product("Kursi RGB", 1_000_000), 2);
transaction1.addToCart(new Product("Kursi Geming", 950_000), 1);
transaction1.addToCart(new Product("Kursi Geming", 950_000), 1);
transaction1.addToCart(new Product("Kursi Nongs", 70_000), 10);
transaction1.addToCart(new Product("Kursi Nongs", 70_000), 1);
console.log(transaction1.getTotal());
console.log(transaction1.checkOut(10_000_000));
