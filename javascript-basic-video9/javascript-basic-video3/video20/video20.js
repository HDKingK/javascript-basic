console.log('Hello world from HTML')

// let sum = (a, b, callback) => {
//     let tong = a + b;
//     // setTimeout(() => {
//     //     callback(tong);
//     // }, 5000);
//     let i = 0
//     let timer = setInterval(() => {
//         i++;
//         callback(tong);
//         if (i === 5) {
//             clearInterval(timer);
//         } // in giá trị  5 lần trong 5s, 
//     }, 1000);
// }

// let printSum = (message) => {
//     console.log('6 + 9 = ', message)
// }

// sum(6, 9, printSum)

// let a = (thamso) => {
//     thamso() 
//     //thamso2()
//     // setTimeout(() => {
//     //     e(loga)
//     // }, 2000);
// }
// function ham(){ //tại sao thằng e liên quan tới f
//     console.log("a")
// }
// function ham1(){ //tại sao thằng e liên quan tới f
//     alert('Tuong Vinh')
// }

// // let b = (thamso) => {
// //     thamso()
// //     // setTimeout(() => {
// //     //     e(loga)
// //     // }, 2000);
// // }
// function ham2(){ //tại sao thằng e liên quan tới f
//     console.log("b")
// }

// a(ham1)

// let thamso = (a, b, c) => {
//     console.log(a, b ,c)
// }

// thamso(3, 5, 7) 

// có ví dụ nào để t làm thử ko

function getNum() {
    alert('check func getNum')
}

function getSet(thamso) {
    console.log('check func getSet')
    thamso()
}

getSet(getNum) //okkkk