var a = function (done) {
    setTimeout(function () {
        done('result a')
    }, 300)
}

var b = function (done) {
    setTimeout(function () {
        done('result b')
    }, 200)
}

parallel([a,b], function (results) {
    console.log(results); // Должен вывести [result a, result b]
})


function parallel(funcArr, doneAll) {
    const res = [];
    let count = 0;

    funcArr.forEach((task, index) => {
        task(function (result) {
            res[index] = result;
            count+=1;

            if (count === funcArr.length) {
                doneAll(res);
            }
        })


    })
}