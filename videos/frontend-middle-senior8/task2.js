console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 1 7 3 5 2 6 4


///
console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4))

Promise.resolve(5).then(console.log)

console.log(6)

setTimeout(() => console.log(7), 0)

// 1 6 3 5 2 4 7
