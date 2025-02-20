// Пример использования:

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let midIndex = Math.floor((left + right) / 2);

        if (arr[midIndex] === target) {
            return midIndex;
        } else if (arr[midIndex] > target) {
            right = midIndex - 1;
        } else if (arr[midIndex] < target) {
            left = midIndex + 1;
        }
    }


    return -1;
}


const sortedArray = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(sortedArray, 7)); // Вывод: 3
console.log(binarySearch(sortedArray, 4)); // Вывод: -1