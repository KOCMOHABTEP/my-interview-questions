// Напишите функцию которая умеет складывать числа
// sum(1) => console: 1
// sum(1)(2)(3) => console: 6

function curry(f) { // curry(f) выполняет каррирование
    return function(a) {
        return f(a);
        // return function(b) {
        //
        // };
    };
}

function sum(number) {
    let s = 0;
    s += number;

    return s;
}

let curriedSum = curry(sum);

console.log( curriedSum(1)(2) ); // 3


console.log(curriedSum(1));
console.log(curriedSum(1)(2)(3));