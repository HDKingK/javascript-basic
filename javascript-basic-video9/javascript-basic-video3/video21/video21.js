console.log('Hello world from HTML')

// let arr = [1, 2, 3 ,4 ,5 ,6 ,7, 8, 9, 10]
let arr = [
    { name: 'Khoa', age: 25},
    { name: 'Vinh', age: 23},
    { name: 'Anh', age: 33},
    { name: 'Dat', age: 25},
    { name: 'Chuong', age: 30}
];
//filter, find (cu phap giong nhau)

let filter = arr.filter((item, index) => {
    return item && item.age === 25;
});

console.log(filter)

// find chi tra ket qua phan tu dau tien tim thay trong array thoa man dieu kien, neu khong thoa man se co ket qua la Undefined