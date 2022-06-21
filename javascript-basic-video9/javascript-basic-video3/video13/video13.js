console.log('Hello world from HTML')

let arr = [`Liv`, `Chelsea`, `Mu`, `MC`]

let i = 0;
while (i < arr.length){
    i++;
    console.log('>>> check i: ', i)
    if (arr[i] === 'Liv') {
        console.log('Found it: ', arr[i])
        break;
    }
}