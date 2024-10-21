// Big O Notations Time Complexity (urutan dari terbaik ke terburuk).
// O(1) -> pemanggilan array
const array: number[] = [1, 2, 3, 4, 5];
console.log(array[0]);

// O(log n) -> Binary Search
function binarySearch(
  arr: number[],
  left: number,
  right: number,
  target: number
) {
  if (right >= left) {
    // Cari nilai tengah
    let mid: number = left + Math.floor((right - left) / 2);
    // Jika nilai tengah sama dengan target maka return index tengahnya
    if (arr[mid] === target) return mid;
    // Jika target lebih kecil dari mid maka hanya menelusuri di bagian kiri subarray.
    if (arr[mid] > target) return binarySearch(arr, left, mid - 1, target);
    // Jika target lebih besar dari mid maka hanya menelusuri di bagian kanan subarray.
    return binarySearch(arr, mid + 1, right, target);
  }

  return -1;
}

const array2: number[] = [1, 2, 3, 4, 5];
console.log(binarySearch(array2, 0, array2.length, 2));

// O(n) -> untuk sekali for loop
function checkDuplicate2(arr: number[]) {
  const uniqueData = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (uniqueData.has(arr[i])) return true;
    else uniqueData.add(arr[i]);
  }

  return false;
}

// O(n log n) -> algoritma sorting
function checkDuplicate3(arr: number[]) {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }

  return false;
}

// O(n^2) -> untuk nested loop dengan 1 looping didalamnya
function checkDuplicate1(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }

  return false;
}

// O(n^n) -> untuk nested loop sedalam n looping

// for (let i = 0; i < arr.length; i++) {
//  for (let j = i + 1; j < arr.length; j++) {
//    for(let k = j; k < arr.length; k++){
//      dst...
//    }
//  }
// }
