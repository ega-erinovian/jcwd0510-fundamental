class Queue {
  persons: string[];

  constructor() {
    this.persons = [];
  }

  queue(name: string) {
    this.persons.push(name);
  }

  dequeue(){
    return this.persons.shift();
  }

  getQueue(){
    return this.persons;
  }
}

export default Queue;