// Проверка на анаграмму

console.log(anagram('finder', 'Friend')) // -> true
console.log(anagram('hello', 'buy')) // -> false


function anagram(w1, w2) {
    const idW1 = w1.replaceAll(" ", '').toLowerCase().split('').sort().join('');
    const idW2 = w2.replaceAll(" ", '').toLowerCase().split('').sort().join('');
    console.log({
        idW1,
        idW2
    })
    return idW1 === idW2
}


console.log(anagram('fi nd er', 'Frie nd')) // -> true
console.log(anagram('hello', 'buy')) // -> false