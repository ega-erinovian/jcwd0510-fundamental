function twoSum(numbers: number[], target: number): number[] {
  let indexes: number[] = [];
  numbers.forEach((number, index) => {
    for(let i = index + 1; i < numbers.length; i++){
        if((number + numbers[i]) === target){
            indexes = [index+1, i+1];
        }
    }
  });

  return indexes;
}

console.log(twoSum([2,7,11,15], 9));
