function sleep<T extends number>(ms: T): Promise<T> {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(ms), ms)
    })
}

sleep(1000)
.then(res => {
    console.log(res);
}).then(res => {
    console.log(res);
    return sleep(500)
}).then(res => {
    console.log(res);
})

// 1s - 1000 undefined
// 500ms - 500

