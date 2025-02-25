setTimeout(() => {
    console.log('timeOut 1')
}, 0);

console.log(1);

new Promise((resolve) => {
    console.log('Promise');
    setTimeout(() => {
        console.log('777')
        resolve();
    }, 0)

}).then(() => {
    console.log('then1')
}).then(() => {
    console.log('then2')
})

console.log(4);

setTimeout(() => {
    console.log('timeOut 2')
}, 0);


// 1 Promise 4 timeOut1 777 then1 then2 timeOut2