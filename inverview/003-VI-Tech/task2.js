function main() {
    console.log('A');
    Promise.resolve().then(() => console.log('B'));
    setTimeout(() => {
        Promise.resolve().then(() => console.log('C'));
    })
    setTimeout(() => console.log('D'));
    console.log('E');
}

main();

// A E B C D
// Да, синхронный код является частью работы event loop, но он выполняется до того, как event loop начинает обрабатывать очереди задач. Синхронный код не помещается в очереди микрозадач или макрозадач — он просто выполняется последовательно в том порядке, в котором он был написан.
// Таким образом, можно сказать, что синхронный код — это первый шаг в каждой итерации event loop.