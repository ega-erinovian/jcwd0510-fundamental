import Queue from "./queue";

const antrian: Queue = new Queue();

antrian.queue("Tante1");
antrian.queue("Tante2");
antrian.queue("Tante3");
antrian.queue("Tante4");
antrian.queue("Tante5");

console.log(antrian.getQueue().length);

function prosesQueue(i: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const waktu: number = Math.floor(Math.random() * 59.9);
    setTimeout(() => {
      if (antrian.getQueue().length !== i) {
        // .then() kondisi jika berhasil
        resolve(`#${i} Client ${antrian.dequeue()} selesai dalam ${waktu} menit. Sisa ${antrian.getQueue().length}`);
      } else {
        // .catch() kondisi jika gagal
        reject("Antrian kosong.");
      }
    }, waktu);
  });
}

async function executeQueue(i: number) {
  try {
    const data = await prosesQueue(i);
    console.log("Logs:", data);
  } catch (error) {
    console.log(error);
  }
}

let i: number = 0;
while (i !== antrian.getQueue().length) {
  executeQueue(i);
  i++;
}

console.log(antrian.getQueue());
