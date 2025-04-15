const square = (x) => x*x;
const times2 = (x) => x*2;
const sum = (a,b) => a + b;


const compose = (...functions) => {
    return (...args) => {
        return functions.reduceRight((acc, cur) => {
            return [cur(...acc)]
        }, args)[0]
    }
}