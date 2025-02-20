console.log(isInt(4)) // true
console.log(isInt(4.2)) // false
console.log(isInt(-3)) // true


function isInt(num) {
    console.log(parseInt(num, 10))
    return num  === parseInt(num, 10)
}