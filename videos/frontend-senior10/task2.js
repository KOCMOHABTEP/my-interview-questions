// for (var i = []; i.length < 3; i.push(2)) {
//     setTimeout(() => {
//         console.log(i);
//     }, i.length * 1000)
// }

// for (let i = []; i.length < 3; i.push(2)) {
//     setTimeout((newArray) => {
//         console.log(newArray);
//     }, i.length * 1000, [...i])
// }


// Мы можем передавать аргументы в setTimeout()
// setTimeout((...timeoutArgs) => {
//     console.log(timeoutArgs);
// }, 1000, 1, 2, 3 ,4, 5)