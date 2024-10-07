// Example
function triangleEx(height: number) {
  let strNum: string = "";
  for (let i = 1; i <= height; i++) {
    for (let j = i; j <= i; j++) {
      strNum += j;
    }
    console.log(strNum);
  }
}

triangleEx(5);

// 1
function triangle(height: number) {
  // Membuat variabel height untuk menampung tinggi dengan rumus dibawah
  let arrNum: string[] = [];
  let stringNum: string = "";
  let count: number = 1;

  // Membuat rangkaian angka ke string
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      if (count >= 10) {
        stringNum += `${count} `;
      } else {
        stringNum += `0${count} `;
      }
      count++;
    }
    stringNum += ".";
  }

  console.log(stringNum);

  // Membersihkan string dari pemisah (".")
  arrNum = stringNum.split(".");

  // Menghilangkan array kosong pada index terakhir
  arrNum.pop();

  console.log(arrNum);

  // Membersihkan array dari space pada akhir setiap indexnya
  arrNum = arrNum.map((num) => num.trim());

  return arrNum;
}

triangle(5).forEach((x) => {
  console.log(x);
});

// 2
function fizzBuzz(input: number) {
  const fizzBuzzArr: any[] = [];
  for (let i = 1; i <= input; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      fizzBuzzArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fizzBuzzArr.push("Fizz");
    } else if (i % 5 === 0) {
      fizzBuzzArr.push("Buzz");
    } else {
      fizzBuzzArr.push(i);
    }
  }
  return fizzBuzzArr;
}

console.log(fizzBuzz(6).join(", "));
console.log(fizzBuzz(15).join(", "));

// 3
function BMICalculator(weight: number, height: number) {
  const BMI: number = weight / height ** 2;
  console.log(BMI);

  if (BMI > 39.9) {
    return "Obesity";
  } else if (BMI < 39.9 && BMI > 30) {
    return "Very Overweight";
  } else if (BMI < 29.9 && BMI > 25) {
    return "Overweight";
  } else if (BMI < 24.9 && BMI > 18.5) {
    return "Ideal";
  } else {
    return "Less Weight";
  }
}

console.log(BMICalculator(68, 1.69));

// 4
function removeOdd(numbers: number[]) {
  return numbers.filter((number) => number % 2 === 0);
}

console.log(removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 5
function convertArr(sentence: string) {
  // regex hanya iseng, gapake juga gapapa
  return sentence
    .replaceAll(/[^\w\s\']|_/g, "")
    .split(" ")
    .filter((s) => s);
}

console.log(convertArr("Hello World, Fellas!"));

// * =========== PEMBAHASAN
// Example
function segitiga1(height: number) {
  for (let i = 1; i <= height; i++) {
    let row: string = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    row = row.trim();
    console.log(row);
  }
}

segitiga1(5)

// 1
function segitiga2(height: number){
  let currentNumber: number = 1;
  const arrSegitiga: string[] = [];
  for (let i = 1; i <= height; i++) {
    let row: string = "";
    for (let j = 1; j <= i; j++) {
      row += currentNumber < 10  ? "0" + currentNumber + " " :  currentNumber + " ";
      currentNumber++;
    }
    row = row.trim();
    arrSegitiga.push(row);
  }
  return arrSegitiga;
}
console.log(segitiga2(5));
