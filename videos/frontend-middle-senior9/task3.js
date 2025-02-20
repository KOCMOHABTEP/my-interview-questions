function promiseAll(promises) {
    const result = [];
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