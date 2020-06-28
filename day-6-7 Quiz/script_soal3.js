

function tampilkan() {
   
    let name = document.getElementById("nama").value;
    let address = document.getElementById("alamat").value;
    let job = document.getElementById("pekerjaan").value;
    let salary = document.getElementById("gaji").value;
    let date_join = document.getElementById("tahun").value;

    var data = { 
        nama  : name,
        alamat  : address,
        pekerjaan : job,
        gaji : salary,
        tahun : date_join
    }

    var json_data = JSON.stringify(data);

    alert(json_data);
    console.log(json_data);   
}