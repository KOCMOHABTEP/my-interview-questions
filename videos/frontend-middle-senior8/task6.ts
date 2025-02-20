// Напишите функцию реализующую Promise.all

const test: number[] = Array.from(Array(5), (_, index) => index);

const promises = test.map((item, index) => {
    return new Promise((resolve, reject) => setTimeout(() => resolve(index), index * 100));
})

const promiseAll = <T,>(promises: Promise<T>[]): Promise<T[]> => {
    const result: T[] = [];
    let counter = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((pr, idx) => {
            pr.then(res => {
                result[idx] = res;
                counter+=1;

                if (counter === promises.length) {
                    resolve(result);
                }
            }).catch(reject)
        })
    })
}