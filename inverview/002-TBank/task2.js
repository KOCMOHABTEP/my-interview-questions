const foo1 = () => {
    console.log('foo1');

    return Promise.resolve().then(foo1)
}

foo1();

// Мы заблокируем браузер