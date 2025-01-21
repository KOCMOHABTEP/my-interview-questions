// написать функцию или результат
// результат есть строка из конкатенируемых value элементов
// результат собирается только из непросроченных записей и конкатенируется в порядке возрастания order
// результат не содержит одинаковых символов

const input = [
    {value: 'abcd', order: 4, expired: false},
    {value: 'xq23', order: 2, expired: true},
    {value: 'xyz1', order: 1, expired: false},
    {value: 'dcba', order: 3, expired: false},
]

const getValues = (arr) => {
    const sortedList = arr.sort((a, b) => a.order - b.order);
    const filteredList = sortedList.filter(item => !item.expired);

    const str = filteredList.reduce((acc, curr) => {
        return acc+curr.value;
    }, '');

    return [...new Set(str)].join('');
};

console.log(getValues(input));