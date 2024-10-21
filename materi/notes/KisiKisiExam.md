# LIFO & FIFO
 - *LIFO (Last In First Out)* dimana yang terakhir masuk adalah yang pertama keluar. Contoh nya adalah pada penggunaan stack. Contohnya adalah pada fungsi dibawah:

 ``` TS
 push(element: any) {
    // Push digunakan untuk menambahkan sebuah elemen ke paling terakhir
    this.#container.push(element);
 }
 
 pop() {
    // Pop digunakan untuk menghapus sebuah elemen yang paling terakhir
    this.#container.pop();
 }
 ```

 - *FIFO (First In First Out)* berarti dimana yang pertama masuk adalah yang pertama keluar. Konsep ini digunakan pada penggunaan Queue. Contoh pada kode:

 ``` TS
 enqueue(element: any) {
   // Push digunakan untuk menambahkan sebuah elemen ke paling terakhir
   return this.#container.push(element);
 }
 
 dequeue() {
   // Shift digunakan untuk menghapus sebuah elemen yang paling depan (pertama)
   return this.#container.shift();
 }
 ```

# INCREMENT & DECREMENT
 - *Prefix* berarti nilai tersebut ditambahkan dulu baru ditampilkan. Contoh:
   ``` TS
   let counter2: number = 10;
   console.log(++counter2); // 11
   ```
   Syntax diatas akan menampilkan bilangan counter2 yang sudah dioperasikan yaitu 11.

 - *Postfix* berarti nilai tersebut ditampilkan dulu baru ditambahkan. Contoh:
   ``` TS
   let counter2: number = 10;
   console.log(counter2++); // 10
   console.log(counter2); // 11
   ```
   Code diatas akan menampilkan bilangan counter2 sebelum dioperasikan yaitu 10. 

# STRING + STRING
 - String memiliki sifat yang unik pada Javascript. Contoh:
   ``` JS
   // 1
   const angka1 = "1";
   const angka2 = "1";
   console.log(angka1 + angka2) // 11

   // 2
   const angka1 = 1;
   const angka2 = "1";
   console.log(angka1 + angka2) // 11

   // 3
   const bool = true;
   const angka = "1";
   console.log(bool + angka) // true1
   ```
   Selain operator '+' akan menganggap string angka bertipe data number. contoh:

   ``` JS
   const angka1 = 1;
   const angka2 = "3";
   console.log(angka1 * angka2); // 3

   const angka1 = "1";
   const angka2 = "3";
   console.log(angka2 - angka1); // 2
   ```

# WHILE & DO WHILE
 - Perbedaan antar keduanya adalah:
   - *WHILE* akan mengecek kondisinya terlebih dahulu sebelum menjalankan kode didalamnya.
   - *DO WHILE* akan menjalankan kode didalamnya terlebih dahulu, baru melakukan pengecekan kondisi apakah loop akan berlanjut atau tidak.

# TIME COMPLEXITY
 - *Big O Notation* akan mencari case terburuk (waktu paling lama dibutuhkan) pada sebuah code.
 - Berikut adalah beberapa notasinya diurutkan sampai yang terburuk:
   - *O(1)* berarti waktu yang konstan. Sebanyak apapun datanya (ex. array), waktu yang dibutuhkan untuk membaca sebuah elemen akan selalu sama.
   - *O(log n)* biasanya adalah binary search.
   - *O(n)* contohnya adalah for loop sekali.
   - *O(n log n)* case pada sorting.
   - *O(n^2^)* case pada nested for loop sedalam 2 loop.
   - *O(n^n^)* case pada nested for loop sedalam n loop.
 - Contoh kasusnya:
   ``` TS
   // O(n^2) -> ini yang akan dipilih karena casenya lebih buruk.
   for(let i = 0; i < 5; i++){
       for(let i = 0; i < 5; i++){
           // ...
       }
   }

   // O(n)
   for(let i = 0; i < 5; i++){
       // ...
   }

   ```

# HOISTING
 - *Function Expression*
   ``` TS
   funcExpression(); // Tidak bisa dijalankan (Error) karena menganggap fungsi belum dideklarasi
   const funcExpression = () => {};
   ```
 - *Function Declaration*
   ``` TS
   funcExpression(); // Tetap bisa dijalankan
   function funcExpression () {};
   ```

# TYPEOF
 - Fungsi *typeof* digunakan untuk mengambil tipe data sebuah variabel dan mereturn string dari tipedata variabel tersebut. Contoh:
 ``` TS
 const str: string = "";
 console.log(typeof str); // 'string'
 ```

# VAR LET CONST
 - *var* adalah global scope variable. Kekurangannya adalah kita dapat membuat 2 buah variable dengan nama yang sama tanpa error.
 - *let* adalah scoped variable yang dapat direassign.
 - *const* adalah scoped variable yang tidak dapat direassign.

# BUILT IN METHOD ARRAY
 - Cek file day4.ts

# NAMING CONVENTION (PENAMAAN VARIABLE)
 - Terdiri dari alfabet, angka, simbol '$' dan, simbol '_'
 - Tidak boleh diawali angka
 - Tidak boleh ada spasi
 - Bersifat case sensitive. Contohnya nama dan Nama adalah 2 variable yang berbeda.
 ```TS
 const nama;
 const Nama;
 const namaOrang; // camelCase
 const NamaOrang; // PascalCase
 const nama1;
 const $nama;
 const 1Orang; ❌
 ```
  
# PRIMITIVE & NON PRIMITIVE
 - *Tipe Data Primitive* adalah tipe data yang hanya dapat menyimpan sebuah nilai pada satu waktu. Beberapa tipe data primitive adalah:
   - Number
   - String
   - Boolean
   - null -> Kosong, tapi membuat sebuah variable bernilai.
   - undefined -> Kosong secara nilai, dan berarti sebuah variable tidak memiliki nilai.
 - *Tipe Data Non-Primitive* adalah tipe data yang dapat menyimpan beberapa nilai pada satu waktu dan dapat diubah nilainya. Object dan Array merupakan *Non-Primitive*.