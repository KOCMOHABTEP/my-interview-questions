// Карирование
// curriedSum(1)(2)(3)

// const curriedSum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);


function curriedSum(initialValue) {
    let sum = initialValue;

    function helper(nextValue) {
        sum += nextValue;
        return helper; // Возвращаем ту же функцию для следующего вызова
    }

    // Добавляем метод valueOf() к функции helper, чтобы позволить получить результат
    helper.valueOf = () => sum;

    return helper;
}

console.log(curriedSum(1)(2)(3))