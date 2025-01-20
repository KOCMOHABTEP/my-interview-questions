// Пример типа с LeetCode :: 2637. Promise Time Limit

const fn = async (n) => {
    await new Promise(res => setTimeout(res, 100));

    return n * n;
}

asyncLimit(fn, 50)(5) // rejected: Превышен лимит времени исполнения;
asyncLimit(fn, 150)(5) // resolved: 25

const fn2 = async (a, b) => {
    await new Promise(res => setTimeout(res, 120));

    return a+b;
}

asyncLimit(fn2, 100)(1, 2); // rejected: Превышен лимит времени исполнения
asyncLimit(fn2, 150)(1, 2); // resolved: 3


function asyncLimit(fn, delay) {
    return async function (...args) {
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Превышен лимит времени исполнения')), delay)
        );

        const fnPromise = fn(...args);

        // Запускаем гонку между выполнением функции и таймаутом
        return Promise.race([fnPromise, timeoutPromise]);
    };
}