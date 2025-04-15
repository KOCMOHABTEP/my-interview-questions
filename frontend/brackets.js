
const bracketsMap = {
    '{': '}',
    '(': ')',
    '[': ']'
}


const checkBrackets = (str) => {
    const stack = [];
    const openBrackets = Object.keys(bracketsMap);

    for (const br of str) {
        if (openBrackets.includes(br)) {
            stack.push(br)
        } else {
            if (bracketsMap[stack.pop()] !== br) {
                return false;
            }
        }
    }

    return true;
}

console.log(checkBrackets('({[({})]})'))
console.log(checkBrackets('({[({}})'))
console.log(checkBrackets('()'))
console.log(checkBrackets('[}'))