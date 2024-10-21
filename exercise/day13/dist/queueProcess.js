"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = __importDefault(require("./queue"));
const antrian = new queue_1.default();
antrian.queue("Tante1");
antrian.queue("Tante2");
antrian.queue("Tante3");
antrian.queue("Tante4");
antrian.queue("Tante5");
console.log(antrian.getQueue().length);
function prosesQueue(i) {
    return new Promise((resolve, reject) => {
        const waktu = Math.floor(Math.random() * 59.9);
        setTimeout(() => {
            if (antrian.getQueue().length) {
                // .then() kondisi jika berhasil
                resolve(`#${i} Client ${antrian.dequeue()} selesai dalam ${waktu} menit. Sisa ${antrian.getQueue().length}`);
            }
            else {
                // .catch() kondisi jika gagal
                reject("Antrian kosong.");
            }
        }, waktu);
    });
}
async function executeQueue(i) {
    try {
        const data = await prosesQueue(i);
        console.log("Logs:", data);
    }
    catch (error) {
        console.log(error);
    }
}
let i = 0;
while (antrian.getQueue().length) {
    executeQueue(i);
    i++;
}
console.log(antrian.getQueue());
