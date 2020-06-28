// const makhlukGhaib = {
//     nama: 'Pocong',
//     kekuatan: 'Terbang',
//     attack() {
//         console.log('Senyum');
//     }
//  };
  
//  const benda = {
//     nama: 'kompor',
//     bahan: 'besi',
//     actionName: 'Memanaskan',
//     action() {
//         console.log(this.actionName);
//     }
//  };
  
//  const halGhaibLain = {
//     nama: 'cinta',
//     bahan: 'perjuangan bersama',
//     actionName: 'Membara',
//     action() {
//         console.log(this.actionName);
//     }
//  };

 class MakhlukGhaib{
     constructor(nama, kekuatan){
         this.nama = nama;
         this.kekuatan = kekuatan;
     }

     attack() {
         console.log('Senyum');
     }
 }

class Benda{
    constructor(nama, bahan, actionName){
        this.nama = nama;
        this.bahan = bahan;
        this.actionName = actionName;
    }

    action(){
        console.log(this.actionName);
    }
}

class HalGhaibLain{
    constructor(nama, bahan, actionName){
        this.nama = nama;
        this.bahan = bahan;
        this.actionName = actionName;
    }
    action(){
        console.log(this.actionName);
    }
}

const newBenda = new Benda('duit', 'kertas', 'abis aja');
console.log(newBenda);

class NewClass extends Benda{
    constructor(nama, bahan, actionName, dasar){
        super(nama, bahan, actionName);
        this.dasar = dasar;
    }

    acionLain(){
        console.log('Action lain');
    }
}

const newClassLain = new NewClass('Duren', 'alami', 'menyengat', 'undefine');
console.log(newClassLain)
newClassLain.acionLain();

import { NamedExport as AliasNamed} from './contoh.js'; 
 
class ClassBaru extends AliasNamed {
    constructor(test){
        super(test);
    }
}

const a = new ClassBaru('123');
console.log(a);


import User from './user.js'

console.log(User);