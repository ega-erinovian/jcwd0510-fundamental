## Big O-Notation

 - Big O Notation akan mencari case yang terburuk. Beberapa O Notation:
    * O(1) waktunya konstan, mau sebanyak apapun datanya waktu untuk membaca sebuah data akan sama waktunya (konstan).
    * O(log n) contohnya adalah binary search.
    * O(n) contohnya adalah for loop.
    * O(n log n) biasanya dipakai untuk sorting.
    * O(n^2) digunakan untuk 2x nested for loop.
    * O(n^n) digunakan untuk nested for loop sedalam n.
 - Sesuai PPT yang terbaik adalah dari O(1), semakin kebawah semakin buruk. Contoh:

# ==========================

<!-- O(n^2) ini yang akan dipilih karena casenya lebih buruk. -->
for(let i = 0; i < 5; i++){
    for(let i = 0; i < 5; i++){
        // ...
    }
}

<!-- O(n) -->
for(let i = 0; i < 5; i++){
    // ...
}

# ==========================

<!-- Materi Exam -->
- LIFO & FIFO
- Increment & decrement
- String + string
- while & do while
- time complexity