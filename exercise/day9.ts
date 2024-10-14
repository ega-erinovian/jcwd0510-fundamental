// 1
class BankQueue {
  #queue: string[];

  constructor(queue: string[]) {
    this.#queue = queue;
  }

  enqueue(person: string) {
    this.#queue.push(person);
  }

  dequeue() {
    this.#queue.shift();
  }

  getQueueLength() {
    return `${this.#queue.length} People Remaining`;
  }

  getQueueList() {
    return this.#queue;
  }
}

const coldplayQueue = new BankQueue([
  "Junet Rocket",
  "Mulan Olive",
  "Bambang KFC",
  "Bayu Mekdi",
]);
console.log(coldplayQueue.getQueueList());
coldplayQueue.enqueue("Maryoto Reddog");
console.log(coldplayQueue.getQueueList());
coldplayQueue.dequeue();
console.log(coldplayQueue.getQueueList());
console.log(coldplayQueue.getQueueLength());

// 2
class Train {
  #passengers: string[];
  #maxPassengers: number;

  constructor(passengers: string[] = ["Masinis"], maxPassengers: number = 4) {
    this.#passengers = passengers;
    this.#maxPassengers = maxPassengers;
  }

  private isFull() {
    return this.#passengers.length >= this.#maxPassengers + 1;
  }

  private isEmpty() {
    return this.#passengers.length <= 1;
  }

  showPessangers() {
    return {
      pessangers: this.#passengers,
      seatsRemain: this.#maxPassengers - (this.#passengers.length - 1),
    };
  }

  passengerIn(name: string) {
    if (this.#passengers.includes(name)) {
      return "passenger already exists";
    } else if (this.isFull()) {
      return "No more seats.";
    } else {
      this.#passengers.push(name);
      return "Add pessanger success.";
    }
  }

  passengerOut(name: string) {
    const temp = new Set(this.#passengers);
    if (name.toLowerCase() === "masinis") return "Cannot remove masinis.";

    if (this.isEmpty()) return "Train Empty.";

    if (!temp.has(name)) return "Passenger not found.";

    temp.delete(name);
    this.#passengers = Array.from(temp);
    return "Remove passenger success";
  }
}

const thomas: Train = new Train();
console.log(thomas.showPessangers());

console.log(thomas.passengerIn("Nurdin Preksu"));
console.log(thomas.showPessangers());

console.log(thomas.passengerOut("Nurdin Preksu"));
console.log(thomas.showPessangers());

console.log(thomas.passengerIn("Jamal AW"));
console.log(thomas.passengerIn("Agus Yu Djum"));
console.log(thomas.passengerIn("Agus Nasgor"));
console.log(thomas.passengerIn("Susi Gudeg"));
console.log(thomas.passengerIn("Budi Siomay"));
console.log(thomas.showPessangers());

console.log(thomas.passengerOut("Budi Siomay"));
thomas.passengerOut("Jamal AW");
console.log(thomas.showPessangers());
thomas.passengerOut("Agus Yu Djum");
console.log(thomas.showPessangers());
thomas.passengerOut("Agus Nasgor");
console.log(thomas.showPessangers());
thomas.passengerOut("Susi Gudeg");
console.log(thomas.showPessangers());
thomas.passengerOut("Susi Gudeg");
console.log(thomas.passengerOut("Masinis"));
console.log(thomas.showPessangers());
