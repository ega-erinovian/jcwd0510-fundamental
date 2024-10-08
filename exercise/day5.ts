// 1
// Sort
function minMaxAvg(numbers: number[]) {
  let lowest: number = numbers.sort((a, b) => a - b)[0];
  let highest: number = numbers.sort((a, b) => b - a)[0];
  let average: number = numbers.reduce((a, b) => a + b) / numbers.length;

  return { lowest, highest, average };
  // return { lowest: lowest, highest: highest, average: average };
}

console.log(minMaxAvg([12, 5, 23, 18, 4, 45, 32]));

// W/O Sort
function minMaxAvg2(numbers: number[]) {
  let lowest: number = Math.min(...numbers);
  let highest: number = Math.max(...numbers);
  let average: number = numbers.reduce((a, b) => a + b) / numbers.length;

  return { lowest, highest, average };
}

console.log(minMaxAvg2([12, 5, 23, 18, 4, 45, 32]));

// 2
function arrConcatenator(words: string[]) {
  let newString: string = "";

  words.forEach((word, index) => {
    index >= words.length - 1
      ? (newString += " and " + word)
      : (newString += word + ", ");
  });

  return newString;
}

console.log(arrConcatenator(["apple", "banana", "cherry", "date", "ahuy"]));

// 3
function secondSmallest(numbers: number[]) {
  if (numbers.length < 2) return "Invalid array length";

  return numbers.sort((a, b) => a - b)[1];
}

console.log(secondSmallest([5, 4, 3, 2, 1, 2]));

// 4
function arrSum(arrA: number[], arrB: number[]) {
  let arrResult: number[] = [];
  if (arrA.length !== arrB.length) {
    return "Both array must have same size!";
  } else {
    arrA.forEach((a, index) => {
      arrResult.push(a + arrB[index]);
    });

    return arrResult;
  }
}

console.log(arrSum([1, 2, 3], [3, 2, 1]));

// 5
function arrAdder(origin: (string | number)[], value: string | number) {
  if (origin.includes(value)) {
    let sameIndex: number = origin.findIndex((ori) => ori === value);
    origin[sameIndex] = value;
  } else {
    origin.push(value);
  }
  return origin;
}

console.log(arrAdder([1, 2, 3, 4], 4));
console.log(arrAdder([1, 2, 3, 4], 9));

// 6
function sumOnlyNum(arrAny: any[]) {
  let numSum: number = 0;
  arrAny.forEach((any) => {
    typeof any === "number" ? (numSum += any) : (numSum += 0);
  });

  return numSum;
}

console.log(sumOnlyNum(["3", 1, "string", null, false, undefined, 2]));

// 7
function numOfArray(max: number, ...numbers) {
  let arrNum: number[] = [];
  numbers.forEach((number) => {
    if (arrNum.length < max) arrNum.push(number);
  });

  return arrNum;
}

console.log(numOfArray(5, 10, 33, 20, 42, 50, 7));

// 8
function combineArrays(arrA: number[], arrB: number[]) {
  return arrA.concat(arrB);
  // return [...arrA, ...arrB]; // bisa juga pakai ini
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]));

// 9
function findDuplicates(numbers: number[]) {
  let duplicated: number[] = [];
  numbers.forEach((number) => {
    if (numbers.indexOf(number) !== numbers.lastIndexOf(number)) {
      if (duplicated.indexOf(number) === -1) {
        duplicated.push(number);
      }
    }
  });

  return duplicated;
}

// cara 2
function findDuplicates2(numbers: number[]) {
  const seen = new Set();
  const duplicate: number[] = [];

  for (const value of numbers) {
    if (seen.has(value) && !duplicate.includes(value)) {
      duplicate.push(value);
    } else {
      seen.add(value);
    }
  }

  return duplicate;
}

console.log(findDuplicates2([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// 10
// function removeContain(numbers1: number[], numbers2: number[]) {
//   let contained: number[] = [];
//   for (let i = 0; i < numbers1.length; i++) {
//     for (let j = 0; j < numbers2.length; j++) {
//       if (numbers1[i] === numbers2[j]) {
//         contained.push(numbers1[i]);
//       }
//     }
//   }

//   return contained;
// }

// console.log(removeContain([1, 4, 5, 7, 9, 10], [4, 1, 6, 8]));

// 10
function findDifference(arr1: number[], arr2: number[]) {
  const difference: number[] = [];
  for (const item of arr1) {
    if (!arr2.includes(item) && !difference.includes(item)) {
      difference.push(item);
    }
  }

  for (const item of arr2) {
    if (!arr1.includes(item) && !difference.includes(item)) {
      difference.push(item);
    }
  }

  return difference;
}

console.log(findDifference([1, 2, 3, 4], [3, 4, 5, 6]));

// 11
function primitiveArr(array: any[]) {
  return array.filter((value) => typeof value !== "object");
  
}

console.log(primitiveArr([1, [], undefined, {}, "string", {}, [], null]));

// 12
function sumDuplicates(numbers: number[]) {
  let sum: number = 0;
  numbers.forEach((number) => {
    if (numbers.indexOf(number) !== numbers.lastIndexOf(number)) {
      sum += number;
    }
  });

  return sum;
}

function sumDuplicates2(numbers: number[]) {
  const seen = new Set();
  const duplicate = new Set();

  for(const number of numbers){
    if(seen.has(number)){
      duplicate.add(number);
    } else{
      seen.add(number);
    }
  }

  let result: number = 0;

  for(const number of numbers){
    if(duplicate.has(number)){
      result+=number;
    }
  }

  return result;
}
console.log(sumDuplicates2([10, 20, 40, 10, 50, 30, 10, 60, 10]));

// 13
function paperScissorRock(shoot: string) {
  shoot = shoot.toLowerCase();
  const com: string[] = ["rock", "paper", "scrissor"];
  //   Math.floor(Math.random() * (max - min) ) + min
  const randomIndex: number = Math.floor(Math.random() * (3 - 0)) + 0;
  console.log(com[randomIndex]);
  switch (shoot) {
    case "rock":
      if (com[randomIndex] === "rock") {
        return "Draw";
      } else if (com[randomIndex] === "paper") {
        return "Win";
      } else {
        return "Lose";
      }
    case "scissor":
      if (com[randomIndex] === "rock") {
        return "Lose";
      } else if (com[randomIndex] === "paper") {
        return "Win";
      } else {
        return "Draw";
      }
    case "paper":
      if (com[randomIndex] === "rock") {
        return "Win";
      } else if (com[randomIndex] === "paper") {
        return "Draw";
      } else {
        return "Lose";
      }
    default:
      return "Invalid Input";
  }
}

function paperScissorRock2(player: string){
  const choices: string[] = ["rock", "paper", "scissor"];

  const computer: string = choices[Math.floor(Math.random() * 2.9)]; // random index antara 0 - 2

  if(player === computer){
    return {result: "Draw", computer, player};
  }

  if((player === "rock" && computer === "scissor") || (player === "scissor" && computer === "paper") || (player === "paper" && computer === "rock")){
    return {result: "Win", computer, player};
  } else {
    return {result: "Lose", computer, player};
  }
}

console.log(paperScissorRock2("paper"));
