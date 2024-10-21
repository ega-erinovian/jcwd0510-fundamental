import Queue from "./queue";
const antrian = new Queue();
antrian.queue("Tante1");
antrian.queue("Tante2");
antrian.queue("Tante3");
antrian.queue("Tante4");
antrian.queue("Tante5");
const waktu = Math.floor(Math.random() * 9.9);
function prosesQueue(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (antrian.getQueue.length > i) {
                // .then() kondisi jika berhasil
                resolve(`Client ${antrian.dequeue()} selesai dalam ${waktu} menit`);
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
while (i < antrian.getQueue().length) {
    executeQueue(i);
    i++;
}
console.log(antrian.getQueue());
