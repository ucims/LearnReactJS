import {Benda } from './benda.js' 

export class Buku extends Benda{
    constructor(nama, fungsiBenda, halaman, warnaCover){
        super(nama, fungsiBenda);
        this.warnaCover = warnaCover;
        this.halaman = halaman;
    }

    tampilWarnaCover(){
        console.log(`Warna cover ${this.warnaCover}`);
    }
}
