// Напишите функцию createCounter, которая возвращает объект с двумя методами: increment и decrement. Эти методы должны увеличивать и уменьшать значение счетчика соответственно.

function createCounter() {
    let count = 0;

    const increment = () => {
        return ++count;
    }
    const decrement = () => {
        return --count;
    }

    return {
        increment,
        decrement
    }
}


const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1