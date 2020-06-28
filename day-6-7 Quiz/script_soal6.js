const numbers = [1, 4, 5, 1, 2, 10, 12, 15, 11, 13, 11, 5];

let urutkan = (array) => {
    let done = false;
    while(!done)
    {
        done = true;
        for(i = 0; i < array.length; i += 1)
        {
            if(array[i -1] > array[i])
            {
                done = false;
                let temp = array[i - 1];
                array[i-1] = array[i];
                array[i] = temp;
            }
        }
    }

    return array;
} 
// urutkan
urutkan(numbers);
console.log(numbers);

//delete duplicate
let uniqueItems = Array.from(new Set(numbers));
console.log(uniqueItems);