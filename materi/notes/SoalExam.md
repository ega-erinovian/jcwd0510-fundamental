# Soal Exam

### 1. Apa yang akan dihasilkan dari syntax typeof null?

    "Object"

### 2. Perbedaan var, let, const.

    - *var* adalah Dapat dideklarasikan ulang dengan nama yang sama dan bersifat global jika dideklarasikan di luar fungsi. Memiliki "hoisting". Serta dapat direassign.
    - *let* adalah scoped variable yang dapat direassign.
    - *const* adalah scoped variable yang tidak dapat direassign.

### 3. Apa itu hoisting?

    Hoisting merupakan sifat yang hanya dimiliki function declaration, dimana function dapat dipanggil sebelum deklarasi function tersebut. Tetapi function expression tidak memilikinya. Contoh:

    ``` TS
    // Function Declaration
    functionDeclaration();
    function functionDeclaration() {}

    // Function Expression
    funcExpression("Hello"); // ❌ Error
    const funcExpression = (m: string) => {
        console.log(m);
    }
    ```

### 4. Bagaimana rumus SPLICE

    arr.splice(start, deleteCount, element1, element2, ...);
    start: index awal,
    deleteCount: jumlah elemen yang ingin dihapus.
    element1, 2, ...: elemen yang ingin ditambahkan.

### 5. Apa yang ditampilkan console.log?

    ``` JS
    let angka = 20 * 10;
    angka = 120;
    console.log(angka); // Jawab: 120 => konsep reassign.
    ```

### 6. Perbedaan forEach dan Map
    forEach => melakukan loop pada array tanpa mereturn apapun. Hasilnya undefined.
    map => melakukan loop pada array dan mereturn array baru berdasarkan hasil dari fungsi tersebut.

### 7. Apa yang ditampilkan console.log?
    Number akan mengubah string menjadi number. 

    ``` JS
    console.log(Number("55x")); // Jawab: NaN atau Not a Number.
    ```

### 8. Bolehkah menamai variabel meja-bundar?

    Tidak. Diganti dengan meja_bundar, atau best-practicenya menggunakan camelCase menjadi mejaBundar.

### 9. Stack menggunakan konsep apa? Queue menggunakan konsep apa?
    Stack menggunakan LIFO (Last In First Out).
    Queue menggunakan FIFO (First In First Out).

### 10. Apa hasil dari syntax ini?

    ``` JS
    console.log(2 * "2"); // 4
    ```
    - Tapi di TS error. Kecuali operator +
    - Selain operator +, akan membuat string menjadi number, kecuali terdapat alfabet atau simbol. Jika ada nilai terdapat string akan menghasilkan NaN.

### 11. Apa hasil dari syntax ini?

    ``` JS
    console.log(2 + 2 + "2"); // 42
    ```

### 12. Jelaskan mengenai function scope?

### 13. Perbedaan null, undefined, dan reference error.

    - null = Memberitahu bahwa variabel akan diisi sebuah nilai.
    - undefined = JS tidak mengetahui apa isi dari variabel tersebut.
    - Reference error = eror yang akan muncul ketika kita berusaha untuk menggunakan variabel yang tidak ada.

### 14. Jelaskan mengenai push, pop, sort.

    - push -> menambahkan nilai array dipaling belakang.
    - pop -> menghapus nilai array dipaling belakang.
    - sort -> mengurutkan array string dan number.

### 15. Apa hasil syntax dibawah

    ``` JS
    console.log(Boolean("")); // false
    console.log(Boolean(" ")); // true
    ```

### 16. Perbedaan While & Do While Loop

    - While loop akan melakukan pengecekan pada kondisinya terlebih dahulu, jika terpenuhi maka akan dijalankan syntax didalamnya.
    - Do While Loop akan menjalankan syntax didalamnya terlebih dahulu sekali, jika kondisinya terpenuhi maka akan kembali ke do.

### 17. Sebutkan Non-Primitive Data Types

    Object & Array

### 18. Array dapat berisi tipe data apa?

    Apapun. Semua tipe data primitive, dan non-primitive (array dalam array, array of object), bahkan fungsi.

### 19. Apa notasi dari block code dibawah ini:

    ``` TS
    for(let i = 0; i < 5; i++){
        for(let i = 0; i < 5; i++){
            // ...
        }
    }
    ```
    O(n^2^)

## 20. Bagaimana cara mengakses value 'tidur' dari array dibawah ini?

    ``` TS
    const person = [
        "bangun",
        () => [{hobby: "tidur"}],
        null,
        10
    ];

    // Jawab
    person[1]()[0].hobby
    ```
    Penjelasan:
    - person[1] akan memanggil index ke 1 dari array person, dan mendapatkan () => [{hobby: "tidur"}]
    - () => [{hobby: "tidur"}] merupakan fungsi dan perlu dipanggil, maka tambahkan '()' menjadi person[1]()
    - Fungsi tersebut mereturn sebuah array [{hobby: "tidur"}], untuk mendapatkan objek didalamnya perlu memanggil index pertama array tersebut dengan [0] menjadi person[1]()[0].
    - Nilai 'tidur' merupakan value dari properties 'hobby', maka kita perlu memanggil key nya menjadi person[1]()[0].hobby, atau person[1]()[0]["hobby"].

### 21. Apa hasil dari syntax dibawah?

    ``` TS
    function example(message: string, callback: () => {}): void{
        callback(message);
    }

    example("hello", "world"); // error "callback is not a function"
    ```
    Penjelasan:
    - Fungsi example membutuhkan parameter message (string) dan callback yang menerima fungsi
    - Saat example dipanggil argumen yang diberikan keduaduanya adalah string, dimana seharusnya argumen kedua adalah sebuah fungsi
    - Karena hal itu, block code diatas akan menghasilkan error
