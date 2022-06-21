console.log('Hello world from HTML')

let arr = [`Liv`, `Chelsea`, `Mu`, `MC`]

let i = 0;
while (i < arr.length){
    if (arr[i] === 'Chelsea') {
        console.log('Found it: ', arr[i])
        break;
    }
    console.log('>>> check i: ', i)
    i++;
}