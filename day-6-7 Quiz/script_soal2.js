const data = {
    merk : ['Honda','Toyota','Suzuki','Daihatsu','Mitsubishi', 'Isuzu', 'Subaru', 'Nissan'],
    plat_nomor : ['RI1','RI2','RI3','RI3','RI3','RI3','RI3','RI3'],
    tahun_produksi : [2011,2012,2013,2014,2015,2016,2017,2018]
}

for(i = 0; i < data.merk.length; i++){
    console.log('Merk : ' + data.merk[i] + ' | Plat Nomor : ' + data.plat_nomor[i] + ' | Tahun : ' + data.tahun_produksi[i]);    
}

const array = {
    data1 : {
        merk_mobil : 'Honda',
        plat_nomor : 'B123AA',
        tahun_produksi : '2012'
    },
    data2 : {
        merk_mobil : 'Toyota',
        plat_nomor : 'B1234BB',
        tahun_produksi : '2010'
    },
    data3 : {
        merk_mobil : 'Daihatsu',
        plat_nomor : 'B1234BB',
        tahun_produksi : '2010'
    },
    data4 : {
        merk_mobil : 'Mitsubisi',
        plat_nomor : 'B1234BB',
        tahun_produksi : '2010'
    },
    data5 : {
        merk_mobil : 'Suzuki',
        plat_nomor : 'B1234BB',
        tahun_produksi : '2010'
    },
    data6 : {
        merk_mobil : 'Isuzu',
        plat_nomor : 'B1234BB',
        tahun_produksi : '2010'
    },
    data7 : {
        merk_mobil : 'Nissan',
        plat_nomor : 'B1234BB',
        tahun_produksi : '2010'
    },
    data8 : {
        merk_mobil : 'Subaru',
        plat_nomor : 'B1234BB',
        tahun_produksi : '2010'
    }
};

console.log(array);