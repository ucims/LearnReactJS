// const kucing = {
//     name : 'Anggora',
//     warna : 'Oren',
//     meong() {
//         console.log(this.name + ' like ' + this.warna);
//     }
// }

// kucing.meong();

// const ameong = kucing.meong();


// const getKucingName = (name) => {
//     console.log(`${name} Anggora`)
// }

// getKucingName('Olen');

// function getNamaLengkap(namaDepan, namaBelakang) {
//     return `${namaDepan} ${namaBelakang}`;
//  }

// getNamaLengkap = (namaDepan, namaBelakang) => { return `${namaDepan} ${namaBelakang}` };

// getNamaDepan = namaLengkap => { return namaLengkap.split('')[0];}

// consoleHai = () => console.log('Hai');

// consoleHai();

// const profil = {
//     namaDepan: 'Bejo',
//     namaBelakang: 'Jhonson',
//     getName() {
//         this.name = `${this.namaDepan} ${this.namaBelakang}`;
//         return this.name;
//     }
//  }
 
//  console.log(profil.getName());


const sebuahObject = {
    name: 'Bejo Jhonson',
    getName() {
        return this.name;
    }
 }
  
 var sebuahObjectLain = {
    name: 'Bejo Jhonson',
    getName: function() { return this.name}
 }

 console.log(sebuahObjectLain.getName());