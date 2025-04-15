function promiseAllSettled(promises) {
    return new Promise((resolve, reject) => {
        let counter = 0;
        const results = [];

        promises.forEach((singlePromise, index) => {
            singlePromise.then((data) => {
                results[index] = {status: 'fullfilled', value: data}
            }).catch(err => {
                results[index] = {status: 'rejected', reason: err}
            }).finally(res => {
                counter++;

                if (counter === promises.length) {
                    resolve(results);
                }
            })
        })
    })
}


function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let counter = 0;
        const result = [];

        promises.forEach((singlePromise, index) => {

            singlePromise.then((data) => {
                result[index] = data;
                counter+=1;

            if (counter === promises.length) {
                resolve(result)
            }
            }).catch(err => {
                reject(err);
            })
        })
    })
}


function task(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(time), time);
    });
}

const taskList = [task(1000), task(5000), task(3000)];

// promiseAll(taskList)
//   .then((results) => {
//     console.log("got results", results);
//   })
//   .catch(console.error);

promiseAllSettled(taskList)
    .then((results) => {
        console.log("got results", results);
    })
    .catch(console.error)