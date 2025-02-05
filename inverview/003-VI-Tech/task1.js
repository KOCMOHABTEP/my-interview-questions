let num = 10,
    name = 'Лось',
    obj1 = {
        value: 'first value',
    },
    obj2 = {
        value: 'second value',
    },
    obj3 = obj2,
    trick = 1;

function kruchu_verchu_zaputat_hochu(num, name, obj1, obj2) {
    trick = 2;
    num = num * 10;
    name = 'Лосось';
    obj1 = obj2;
    obj2.value = 'new value';
}

kruchu_verchu_zaputat_hochu(num, name, obj1, obj2);

console.log(trick) // 2 - глобальная переменная была изменена
console.log(num)   // 10 - исходное значение num осталось неизменным
console.log(name)  // 'Лось' - исходное значение name осталось неизменным
console.log(obj1.value) // 'first value' - obj1 вне функции не изменился
console.log(obj2.value) // 'new value' - свойство value объекта было изменено
console.log(obj3.value) // 'new value' - obj3 указывает на тот же объект, что и obj2

// Пояснения к результатам:
//
// trick изменился, потому что мы модифицировали глобальную переменную
// num и name остались неизменными, потому что они являются примитивными типами и были перезаписаны в локальной области видимости функции
// obj1.value остался 'first value', потому что внутри функции мы создали новую локальную ссылку obj1, не затронув оригинальный объект
// obj2.value и obj3.value стали 'new value', потому что obj2 и obj3 указывают на один и тот же объект, и изменение свойства этого объекта отразилось на всех ссылках на него





