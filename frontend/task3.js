// Отсортировать массив по датам
const test = [
    {date: '10.02.2025'},
    {date: '12.04.2025'},
    {date: '11.03.2025'},
    {date: '01.05.2024'},
]

console.log(test.sort((a,b) => new Date(a.date) - new Date(b.date)));

// Реализовать счетчик используя замыкания
function createCounter () {
    let count = 0;

    return () => count++;
}

const count = createCounter();
console.log(count());
console.log(count());

// Реализовать функцию f(2,3) -> 5, которая при вызове вернет f(2)(3) -> 5

function sum(a,b) {
    if (a && b) {
        return a + b;
    }

    return (c) => a + c;
}

console.log(sum(2,3))
console.log(sum(2)(3));