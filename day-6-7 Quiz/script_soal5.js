let data = "Rever_1_Test_2";
let result = data.split('e').join('');
console.log(result);

function reserverString(str){
    let reserved = "";
    for(let character of str)
    {
        reserved = character + reserved;
    }

    return reserved;
}

console.log(reserverString(result));