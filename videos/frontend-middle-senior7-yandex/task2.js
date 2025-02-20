const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a,b) => a + b;

const compose = (...functions) => {
    return (...args) => {
        return functions.reduceRight((acc, cur) => {
            return [cur(...acc)];
        }, args)[0]
    }
}

console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3,4))));