// Masuk EXAM
// * ========== STACK -> LIFO (Last In First Out)

class Stack {
  #container: any[];
  maxSize: number;

  constructor() {
    this.#container = [];
    this.maxSize = 10;
  }

  private isFull() {
    return this.#container.length >= this.maxSize;
  }

  private isEmpty() {
    return this.#container.length <= 0;
  }

  push(element: any) {
    if (this.isFull()) {
      return "Container penuh.";
    }
    this.#container.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Container kosong.";
    this.#container.pop();
  }

  getContainer() {
    return this.#container;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(4);
stack.pop();
stack.pop();
console.log(stack.getContainer());

// * ========== QUEUE -> FIFO (First In First Out)
class Queue {
  #container: any[];

  constructor() {
    this.#container = [];
  }

  enqueue(element: any) {
    return this.#container.push(element);
  }

  dequeue() {
    return this.#container.shift();
  }

  getContainer() {
    return this.#container;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.getContainer());
queue.dequeue();
console.log(queue.getContainer());

// * ========== SET -> Hanya digunakan untuk menyimpan data yang bersifat unique
const char: string[] = ["A", "B", "C", "D", "B"];
const mySet = new Set(char);

console.log(mySet);

// Menambahkan data ke Set
mySet.add("Z");
mySet.add("A");
console.log(mySet);

// Mencari value didalam set
console.log(mySet.has("E"));
console.log(mySet.has("A"));

// Menghapus value
mySet.delete("C");
console.log(mySet);

// Loop pada set
for (const value of mySet) {
  console.log(value);
}

// Mendapatkan size sebuah set
console.log(mySet.size);

// * ========== MAP
const myMap = new Map();
myMap.set("David", "123");
myMap.set("Sue", "321");

// Menampilkan isi Map
for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

console.log(myMap.size);

console.log(myMap.has("David"));
console.log(myMap.delete("David"));
console.log(myMap.has("David"));


