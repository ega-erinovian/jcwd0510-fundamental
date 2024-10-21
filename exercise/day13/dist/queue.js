"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.persons = [];
    }
    queue(name) {
        this.persons.push(name);
    }
    dequeue() {
        return this.persons.shift();
    }
    getQueue() {
        return this.persons;
    }
}
exports.default = Queue;
