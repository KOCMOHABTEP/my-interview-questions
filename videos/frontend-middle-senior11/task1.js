Array.prototype.findUnique = function () {
    const countMap = new Map();

    this.forEach((el) => {
        countMap.get(el) ? countMap.set(el, countMap.get(el) + 1)  : countMap.set(el, 1);
    })

    const result = [];

    countMap.forEach((value, key) => {
        if (value === 1) result.push(key);
    })

    return result
}

console.log([10, 5, 10, 0, 6, 6, 7, 2 , 9 , 9].findUnique()); // 5, 0 , 7, 2


