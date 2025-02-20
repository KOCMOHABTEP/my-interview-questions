Promise.resolve(1)
    .then(x => x + 1) // 2
    .then(x => {throw x})
    .then(x => console.log(x))
    .catch(err => console.log(err)) // 2
    .then(x => Promise.resolve(x))
    .catch(err => console.log(err))
    .then(x => Promise.resolve(x))


// 2 undefined