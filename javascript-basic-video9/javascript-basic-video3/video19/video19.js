console.log('Hello world from HTML')

let sum = (a, b) => {
    return a + b;
}

console.log('check sum: 9 + 6 = ', sum(9, 6))

let obj = {
    name: 'Khoa',
    address: 'TPHCM',
    getName: function () {   //function ben trong object hoac class duoc goi la method
        return this.name;
    }
}

console.log('>>> get name obj: ', obj.getName())
//function vs method => reuse