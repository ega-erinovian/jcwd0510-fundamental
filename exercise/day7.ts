// 1
// 👇 hanya membandingkan value
function isEqual(obj1: { a: any }, obj2: { a: any }): boolean {
  return obj1.a === obj2.a;
}

console.log(isEqual({ a: 2 }, { a: 1 }));
console.log(isEqual({ a: 1 }, { a: 1 }));
console.log(isEqual({ a: 1 }, { a: "Hello" }));

// 2
function intersectionObj(obj1: {}, obj2: {}) {
  const obj1Keys: string[] = Object.keys(obj1);
  const obj2Keys: string[] = Object.keys(obj2);

  let contained: string[] = [];
  for (let i = 0; i < obj1Keys.length; i++) {
    for (let j = 0; j < obj2Keys.length; j++) {
      if (obj1Keys[i] === obj2Keys[j]) {
        contained.push(obj1Keys[i]);
      }
    }
  }

  let result = {};

  contained.forEach((x) => {
    if (obj1[x] === obj2[x]) result[x] = obj1[x];
  });

  return result;
}

console.log(intersectionObj({ a: 1, b: 2 }, { a: 1, b: 3 }));

// 3
interface Student {
  name: string;
  email: string;
}

const students1: Student[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const students2: Student[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

function mergeData(students1: Student[], students2: Student[]) {
  const merged: Student[] = students1.concat(students2);
  console.log(merged);

  let duplicateIndex: number[] = [];

  // masih kurang efektif dengan penggunaan 2 loop (nested loop & forEach)
  for (let i = 0; i < merged.length; i++) {
    for (let j = i + 1; j < merged.length; j++) {
      if (merged[i].email === merged[j].email) {
        duplicateIndex.push(merged.indexOf(merged[j]));
      }
    }
  }

  console.log(duplicateIndex);

  duplicateIndex.forEach((index) => {
    merged.splice(index, 1);
  });

  return merged;
}

console.log(mergeData(students1, students2));

// 4
const persons: { name: string; age: number }[] = [
  {
    name: "David",
    age: 25,
  },
];

function switchPropVal(persons: {}[]) {
  let keys: string[] = [];
  let values: any[] = [];
  const switched: {} = {};

  persons.forEach((person) => {
    keys = Object.keys(person);
    values = Object.values(person);
  });

  keys.forEach((key, index) => {
    switched[values[index]] = key;
  });

  persons.fill(switched);

  return persons;
}

console.log(switchPropVal(persons));

// 5
function factorial(number: number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));
