// 1
function phoneNumber(phone: any) {
  // Check if the inpus is string
  if (typeof phone !== "string")
    return "Invalid phone number. The phone number must have type of string!";

  // Check if the number's length is not 12
  if (phone.length !== 12)
    return "Invalid phone number. The length must be 12!";

  // Check if the input only contain digits.
  const isNumber: boolean = [...phone].every((char) =>
    "0123456789".includes(char)
  );

  console.log(isNumber);

  if (!isNumber) return "Invalid phone number. It must contains only digits!";

  //   Adding '-' to separate numbers.
  let temp: string[] = [...phone];
  for (let i = 3; i < phone.length; i += 5) temp.splice(i, 0, "-");

  //   Replacing "0" with "62"
  temp.splice(0, 1, "62");

  //   Combining the array into string
  phone = temp.join("");

  //   Wrapping the first 4 digits with parentheses
  temp = phone.split("-");
  temp[0] = `(${temp[0]})`;

  //   Joining them together again using "-"
  phone = temp.join("-");

  return phone;
}

console.log(phoneNumber("085155114017"));

// 2
class Produk {
  nama: string;
  berat: number;
  price: number;
  stok: number;
  jenis: string;

  constructor(nama: string, berat: number, price: number, stok: number) {
    this.nama = nama;
    this.berat = berat;
    this.price = price;
    this.stok = stok;
  }
}

class Buku extends Produk {
  id: string;
  penulis: string;

  constructor(
    id: string,
    nama: string,
    berat: number,
    price: number,
    stok: number,
    penulis: string
  ) {
    super(nama, berat, price, stok);
    this.id = id;
    this.penulis = penulis;
    this.jenis = "Buku";
  }
}

class Pakaian extends Produk {
  id: string;
  brand: string;

  constructor(
    id: string,
    nama: string,
    berat: number,
    price: number,
    stok: number,
    brand: string
  ) {
    super(nama, berat, price, stok);
    this.id = id;
    this.brand = brand;
    this.jenis = "Pakaian";
  }
}

interface Product {
  id: string;
  nama: string;
  berat: number;
  price: number;
  stok: number;
  brand?: string;
  penulis?: string;
}

interface Cart {
  id: string;
  nama: string;
  berat: number;
  price: number;
  qty: number;
  brand?: string;
  penulis?: string;
}

class OnlineShop {
  #products: Product[];
  #cart: Cart[];

  constructor() {
    this.#products = [];
    this.#cart = [];
  }

  private extractID(product: any) {
    let ids: string[] = [];
    ids = this.#products.map((p) => p.id);

    return ids;
  }

  private isCartEmpty() {
    return this.#cart.length <= 0;
  }

  private isProductEmpty() {
    return this.#products.length <= 0;
  }

  tambahProduk(product: Buku | Pakaian) {
    let isExist: boolean = false;
    isExist = this.extractID(product).includes(product.id) ? true : false;

    if (isExist) {
      return "Product has been registered";
    }

    if (product instanceof Buku) {
      this.#products.push({
        id: product.id,
        nama: product.nama,
        berat: product.berat,
        price: product.price,
        stok: product.stok,
        penulis: product.penulis,
      });
    } else {
      this.#products.push({
        id: product.id,
        nama: product.nama,
        berat: product.berat,
        price: product.price,
        stok: product.stok,
        brand: product.brand,
      });
    }
  }

  tambahKeKeranjang(id: string, qty: number) {
    const productIndex: number = this.#products.findIndex((p) => p.id === id);

    if (productIndex === -1) return "Barang tidak tersedia di katalog.";

    if (this.#products[productIndex].stok < qty) {
      return `Jumlah melebihi stok. Ada ${
        this.#products[productIndex].stok
      } tersedia`;
    }

    //   Kurangi stok
    this.#products[productIndex].stok -= qty;

    //   Jika yang dimasukkan adalah barang yang sama hanya mengubah qty saja.
    const existingProduct = this.#cart.find((item) => item.id === id);

    if (existingProduct) {
      existingProduct.qty += qty;
      existingProduct.price += this.#products[productIndex].price * qty;
    } else {
      // Cek untuk membedakan antara buku dan pakaian
      if (this.#products[productIndex].hasOwnProperty("penulis")) {
        this.#cart.push({
          id: this.#products[productIndex].id,
          nama: this.#products[productIndex].nama,
          berat: this.#products[productIndex].berat,
          price: this.#products[productIndex].price * qty,
          qty: qty,
          penulis: this.#products[productIndex].penulis,
        });
      } else {
        this.#cart.push({
          id: this.#products[productIndex].id,
          nama: this.#products[productIndex].nama,
          berat: this.#products[productIndex].berat,
          price: this.#products[productIndex].price * qty,
          qty: qty,
          brand: this.#products[productIndex].brand,
        });
      }
    }
  }

  transaksi(uangUser: number, jarak: number) {
    let total: number = 0;
    let beban: number = 0;
    this.#cart.forEach((item) => {
      total += item.price;
      beban += item.berat;
    });

    if (beban > 1000) {
      // Tambahkan total dengan ongkir dan beban jika melebihi 1
      total += jarak * 2000 + beban * 10;
    } else {
      // Tambahkan total dengan ongkir
      total += jarak * 2000;
    }

    if (uangUser < total) {
      return "Pembayaran dialihkan ke paylater. Transaksi tidak dapat dibatalkan. Harus bayar.";
    } else {
      // Mengosongkan cart
      this.#cart = [];

      return {
        total: total,
        bayar: uangUser,
        kembali: uangUser - total,
        jarak: jarak,
        estimasiWaktu: `${jarak * 4} Menit`,
      };
    }
  }

  showCatalog() {
    if (this.isProductEmpty()) {
      return "Product kosong. Tambahkan produk.";
    }

    return this.#products;
  }

  showCart() {
    if (this.isCartEmpty()) {
      return "Cart kosong. Silahkan belanja.";
    }

    return this.#cart;
  }
}

const heriPoter: Buku = new Buku(
  "B001",
  "Heri Poter dan Kaos Kaki Ajaib",
  100,
  200_000,
  10,
  "J.K Mursid"
);

const dilan: Buku = new Buku(
  "B002",
  "Dilan 1945: World War 2",
  100,
  120_000,
  5,
  "Pidi Di"
);

const giordano: Pakaian = new Pakaian(
  "P001",
  "Polo Starboy Merah",
  50,
  250_000,
  7,
  "Giordano"
);

const olx: OnlineShop = new OnlineShop();
olx.tambahProduk(heriPoter);
olx.tambahProduk(giordano);
olx.tambahProduk(heriPoter);
olx.tambahProduk(dilan);
console.log(olx.showCatalog());
olx.tambahKeKeranjang("B002", 4);
olx.tambahKeKeranjang("B002", 1);
olx.tambahKeKeranjang("B001", 2);
console.log(olx.tambahKeKeranjang("B003", 2));
console.log(olx.tambahKeKeranjang("B002", 1));
console.log(olx.showCatalog());
console.log(olx.showCart());
console.log(olx.transaksi(1_00_000, 5));
console.log(olx.transaksi(1_500_000, 5));
console.log(olx.showCart());
