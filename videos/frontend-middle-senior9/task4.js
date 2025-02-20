
const bracketsMap = {
    '(': ')',
    '[': ']',
    '{': '}'
}

function checkBrackets(str) {
    const stack = []; // (, [, { - ]

    for (let i = 0; i < str.length; i++) {
        const cur = str[i];

        if (cur in bracketsMap) {
            stack.push(cur);
        } else if (bracketsMap[stack.pop()] !== cur) {
            return false;
        }

    }

    return !stack.length;
}

// мой вариант
// function checkBrackets(str) {
//     const stack = [];
//     const hash = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }
//
//     for (let i = 0; i < str.length; i++) {
//         const cur = str[i];
//         console.log(hash[cur]);
//
//         if (hash[cur]) {
//             stack.push(hash[cur])
//         } else {
//             if (hash[stack.pop()] === cur) {
//                 continue;
//             } else {
//                 return false
//             }
//         }
//
//     }
//
//     return true;
// }




console.log(checkBrackets('([](){()})')) // true
console.log(checkBrackets('}{')) // false

// const bracketsMap = {
//     ')': '(',
//     ']': '[',
//     '}': '{'
// }
//
// let openBracketsStack = []
//
// for (let i = 0; i < s.length; i++) {
//     const currentBracket = s[i]
//
//     if (['(', '[', '{'].includes(currentBracket)) {
//         openBracketsStack.push(currentBracket)
//     } else if (openBracketsStack.pop() !== bracketsMap[currentBracket]) {
//         return false
//     }
// }
// return !openBracketsStack.length