//tampilkan genap
const numbers = [1, 4, 5, 1, 2, 10, 12, 15, 11, 13, 11, 5];
let genap = () =>  {
    for(num of numbers)
    {
        if(num % 2 === 0)
        {
            console.log(num);
        }
    }
}

genap();
// penjumlahan 
let sumNumbers = () => {
 console.log("Menjumlahkan semua value : " + numbers.reduce(function(acc, val){
     return acc + val;
 }, 0));
 
};

sumNumbers();


// urutkan asc
let urutkan = () => {
    numbers.sort(function(a,b){return a-b});
    console.log(numbers);
}

urutkan();

