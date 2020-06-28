const arraySatu = [1, 2, 3, 4];
const arrayDua = [5, 6, 7, 8];
const arrayTiga = [9, 10, 11, 12];
const arrayEmpat = [13, 14, 15, 16];


const gabungan = arraySatu.concat(arrayDua, arrayTiga, arrayEmpat);

const gabungan2 = [...arraySatu, ...arrayDua, ...arrayTiga, ...arrayEmpat];
console.log('gabungan 2', gabungan2)
console.log('gabungan 1',gabungan);

const objectBebas = {
    aspal: 'hitam',
    roket: 'meluncur',
    joker: 'villain',
    unta: 'arab',
    ninja: 'hatori'
}

const { aspal : a, roket : r, joker : j, unta : u, ninja : n} = objectBebas;
console.log(a,r,j,u,n);

const unfilteredArray = [
    {
        name: 'Bejo',
        isAllowed: true
    },
    {
        name: 'Jhonson',
        isAllowed: false
    },
    {
        name: 'Juara',
        isAllowed: true
    },
    {
        name: 'Panco',
        isAllowed: false
    },
    {
        name: 'Nasional',
        isAllowed: true
    }
 ]

 const filterArray = unfilteredArray.filter(e => { return e.isAllowed == true ; });
 console.log(filterArray);
