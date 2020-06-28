import { Buku } from './buku.js';

// const payung = {
//     nama: 'Payung',
//     fungsiBeda : 'melindungi dari panas',
//     fungsi(){
//         console.log(`${this.nama} berfungsi untuk ${this.fungsiBeda}`);
//     }
// }

// const jas = {
//     nama: 'Jas Hujan',
//     fungsiBeda : 'melindungi dari hujan',
//     fungsi(){
//         console.log(`${this.nama} berfungsi untuk ${this.fungsiBeda}`);
//     }
// }

// const motor = new Benda('Motor','Mengantarkan orang');
// const mobil = new Benda('Mobil', 'Mengantarkan barang');

// console.log('Motor', motor);
// console.log('Mobil', mobil);


const book = new Buku('Novel', 'Fiksi', 250, 'Warna warni');
book.tampilWarnaCover();
console.log(book); 

