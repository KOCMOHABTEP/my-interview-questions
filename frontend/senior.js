// Необходимо реализовать функцию debounce таким образом, чтобы после многократного вызова функции debouncedFetch в консоли вывелся только один результат "return result 6"
// function debounce(func, delay) {
//     let timeoutId;
//
//     return function (...args) {
//         clearTimeout(timeoutId);
//
//         timeoutId = setTimeout(() => {
//             func.apply(this, args)
//         }, delay)
//     }
// }
//
// function fetch (data) {
//     console.log(`return result ${data}`);
// }
//
// const debouncedFetch = debounce(fetch, 1000);
//
// debouncedFetch(2);
// debouncedFetch(3);
// debouncedFetch(4);
// debouncedFetch(5);
// debouncedFetch(6);

/// ==== 2
Promise.resolve(1)
    .then(x => console.log(1))
    .catch(x => console.log(2))
    .then(x => console.log(3))

Promise.reject(2)
    .then(x => console.log(4))
    .then(x => console.log(5))
    .catch(x => console.log(6))
    .then(x => console.log(7))