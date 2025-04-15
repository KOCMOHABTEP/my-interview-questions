/**
 * 1
 */
// console.log(Boolean(1)) -> true
// console.log(Boolean("0")) -> true
// console.log(Boolean("")) -> false
// console.log(Number("   123   ")) // -> 123 number
// console.log(Number(true)) // 1 - number
// console.log(Number(false)) // 0 - number

/**
 * Что такое typeof
 */
console.log(typeof null); // object - из-за ошибки в языке

/**
 * Function Declaration
 */
sayHi();

function sayHi() {
    console.log('hi')
}

// sayHello();
// const sayHello = function () { // будет ошибка Reference error
//     console.log('hello')
// }

// sayHello();
// var sayHello = function () { // будет ошибка, sayHello is not a function
//     console.log('hello')
// }

/**
 * Метода создания массива
 * Какие методы создадут массив?
 */
// new Array.prototype.constructor(1,2) +
// new Array(1,2) +
// Array(1,2) +
// [1,2] +
// 1..2 -

/**
 * Что будет выведено?
 */

// Что будет выведено?
// push и unshift возвращают длину массива - число
// поэтому будет typerror
// console.log([].push(1,2).unshift(3).join());

// Что будет выведено?
console.log(2 && 1 && 0 && null && 0 && undefined) // -> будет выведено 0

// Что будет выведено?
const obj = {
    "0": 1,
    0: 2,
}
console.log(obj["0"] + obj[0]); // -> 4, перезаписываем ключи

// Что будет выведено?
let name = 'Вася';
function sayHello() {
    console.log(name);
}

setTimeout(function () {
    let name = 'Петя';
    sayHello(); // -> Выведется Вася, так как замкнули переменную Вася
}, 1000)

// Что будет выведено?
let x = 5;
console.log(x++); // -> 5, постфиксная запись, сначала вывод, потом +

