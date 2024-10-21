// * ========== PROMISE & ASYNC AWAIT ==========

// Promise manual
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        // .then() kondisi jika berhasil
        resolve("Data berhasil diambil");
      } else {
        // .catch() kondisi jika gagal
        reject("terjadi kesalahan");
      }
    }, 500);
  });
}

// Promise tanpa async await
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise Selesai");
  });

// Menggunakan async await
const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("promise selesai");
  }

  // Finally dan catch optional. tapi catch disarankan ada untuk menghandle error.
};

getData();

// atau

// async function getData() {
//     ...
// }

// Menggunakan data API dummy tanpa async await
const getAPI = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    });
};

getAPI();

// Menggunakan data API dummy dengan async await
const getAPI2 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
  }
};

getAPI2();

// JSON -> javascript object notation
const user = {
  name: "budi",
  age: 40,
};

const userJSON = JSON.stringify(user) // js object to JSON
console.log(userJSON);

const parseJson = JSON.parse(userJSON); // JSON to js object
console.log(parseJson);

// * ========== MODULES ==========
// ? 👇 Sebenernya bisa tapi quokka free ga support import file.
// import { myFunc, name } from "./test";
// myFunc();
// console.log(name);

// * =========== HOISTING ==========
// -> var & func declaration

// func expresssion
// ! testFuncExpression(); -> error jika sebelum deklarasi
const testFuncExpression = () => {};
testFuncExpression();

// func declaration
testFuncDeclaration();
function testFuncDeclaration () {}
testFuncDeclaration();

const angka1: number = 1;
const angka2: string = "1";
console.log(angka1 + angka2);
