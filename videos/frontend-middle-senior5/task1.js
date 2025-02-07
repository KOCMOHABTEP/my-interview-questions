console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(function () {
    console.log('promise1')
}).then(function () {
    console.log('promise2')
})

setTimeout(() => {
    new Promise((resolve) => resolve(3)).then(console.log)
})

setTimeout(() => {
    console.log(5);
})

console.log('script end');

// script start
// script end
// promise1
// promise2
// setTimeout
// 3
// 5
