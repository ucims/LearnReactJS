export class Benda{
    constructor(nama, fungsiBenda){
        this.nama = nama;
        this.fungsiBenda = fungsiBenda;
    }

    fungsi() {
        console.log(`${this.nama} berfungsi untuk ${this.fungsiBenda}`);
    }
}
