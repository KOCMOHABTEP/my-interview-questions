// Напишите функцию findUnique(arr), которая принимает массив чисел и возвращает массив только уникальных значений

const data = [1,5,7,8,1,3,4,5,7,9,10, 7, 8];

function findUnique(arr) {
    return [...new Set(arr)].sort((a,b) => a - b);
}

console.log(findUnique(data));