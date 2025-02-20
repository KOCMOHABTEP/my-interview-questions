// Палиндром


console.log(pal('racecar')) // true
console.log(pal('table')) // false

function pal(str) {
    const formattedStr = str.toLowerCase().replaceAll(" ", '');
    return str.toLowerCase().split('').reverse().join('') === formattedStr;
}