var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BankQueue_queue, _Train_passengers, _Train_maxPassengers;
// 1
var BankQueue = /** @class */ (function () {
    function BankQueue(queue) {
        _BankQueue_queue.set(this, void 0);
        __classPrivateFieldSet(this, _BankQueue_queue, queue, "f");
    }
    BankQueue.prototype.enqueue = function (person) {
        __classPrivateFieldGet(this, _BankQueue_queue, "f").push(person);
    };
    BankQueue.prototype.dequeue = function () {
        __classPrivateFieldGet(this, _BankQueue_queue, "f").shift();
    };
    BankQueue.prototype.getQueueLength = function () {
        return "".concat(__classPrivateFieldGet(this, _BankQueue_queue, "f").length, " People Remaining");
    };
    BankQueue.prototype.getQueueList = function () {
        return __classPrivateFieldGet(this, _BankQueue_queue, "f");
    };
    return BankQueue;
}());
_BankQueue_queue = new WeakMap();
var coldplayQueue = new BankQueue([
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
var Train = /** @class */ (function () {
    function Train(passengers, maxPassengers) {
        if (passengers === void 0) { passengers = ["Masinis"]; }
        if (maxPassengers === void 0) { maxPassengers = 4; }
        _Train_passengers.set(this, void 0);
        _Train_maxPassengers.set(this, void 0);
        __classPrivateFieldSet(this, _Train_passengers, passengers, "f");
        __classPrivateFieldSet(this, _Train_maxPassengers, maxPassengers, "f");
    }
    Train.prototype.isFull = function () {
        return __classPrivateFieldGet(this, _Train_passengers, "f").length >= __classPrivateFieldGet(this, _Train_maxPassengers, "f") + 1;
    };
    Train.prototype.isEmpty = function () {
        return __classPrivateFieldGet(this, _Train_passengers, "f").length - 1 <= 0;
    };
    Train.prototype.showPessangers = function () {
        return {
            pessangers: __classPrivateFieldGet(this, _Train_passengers, "f"),
            seatsRemain: __classPrivateFieldGet(this, _Train_maxPassengers, "f") - (__classPrivateFieldGet(this, _Train_passengers, "f").length - 1),
        };
    };
    Train.prototype.passengerIn = function (name) {
        if (__classPrivateFieldGet(this, _Train_passengers, "f").includes(name)) {
            return "passenger already exists";
        }
        else if (this.isFull()) {
            return "No more seats.";
        }
        else {
            __classPrivateFieldGet(this, _Train_passengers, "f").push(name);
            return "Add pessanger success.";
        }
    };
    Train.prototype.passengerOut = function (name) {
        var temp = new Set(__classPrivateFieldGet(this, _Train_passengers, "f"));
        if (name.toLowerCase() === "masinis")
            return "Cannot remove masinis.";
        if (this.isEmpty())
            return "Train Empty.";
        if (!temp.has(name))
            return "Passenger not found.";
        temp.delete(name);
        __classPrivateFieldSet(this, _Train_passengers, Array.from(temp), "f");
    };
    return Train;
}());
_Train_passengers = new WeakMap(), _Train_maxPassengers = new WeakMap();
var thomas = new Train();
console.log(thomas.isFull());
console.log(thomas.isEmpty());
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
console.log(thomas.passengerOut("Jamal AW"));
console.log(thomas.passengerOut("Agus Yu Djum"));
console.log(thomas.passengerOut("Agus Nasgor"));
console.log(thomas.passengerOut("Susi Gudeg"));
console.log(thomas.passengerOut("Susi Gudeg"));
console.log(thomas.passengerOut("Masinis"));
console.log(thomas.showPessangers());
