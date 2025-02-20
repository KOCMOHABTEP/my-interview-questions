// Найти наибольший и наименьший элемент в массиве, не используя Math.max и Math.min.
const arr = [1,2,3,4,5,6];
// const arr = [5, 1, 3, 412, 12, 512];

const findMinMax = (array) => {
    let min = array[0];
    let max = array[0];

    for (const item of array) {
        if (item > max) {
            max = item
        } else if (item < min) {
            min = item;
        }
    }


    return {
        min,
        max
    }
}

const findMax = (array) => {
    let max = array[0];

    for (const item of array) {
        if (item > max) {
            max = item
        }
    }

    return max;
};


const findMin = (array) => {
    let min = array[0];

    for (const item of array) {
        if (item < min) {
            min = item
        }
    }

    return min;
};

console.log(findMax(arr));
console.log(findMin(arr));
console.log(findMinMax(arr));
