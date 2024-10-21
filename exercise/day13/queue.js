class Queue {
    constructor() {
        this.persons = [];
    }
    queue(name) {
        this.persons.push(name);
    }
    dequeue() {
        this.persons.shift();
    }
    getQueue() {
        return this.persons;
    }
}
export default Queue;
