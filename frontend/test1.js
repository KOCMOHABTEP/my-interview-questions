// const structure = {
//     name: 'jsgrill',
//     children: [
//         {name: 'abc'},
//         {name: 'bcd'},
//         {
//             name: 'images',
//             children: [
//                 {name: 'logo.png'},
//                 {
//                     name: 'codepen', children: [
//                         {name: 'background.svg'},
//                         {name: 'tmbn.svg'},
//                     ]
//                 },
//             ]
//         },
//     ]
// }
//
//
// function processedStructure(struct) {
//     let result = '';
//
//     const rec = (obj, level = 0) => {
//         const prefix = "*".repeat(level);
//         result += prefix + obj.name + '\n';
//
//         if (obj.children) {
//             obj.children.forEach(item => {
//                 if (item.children) {
//                     rec(item, level + 1);
//                 } else {
//                     result += prefix + '*' + item.name + '\n';
//                 }
//             })
//         }
//     }
//
//     rec(struct);
//
//
//     return result;
// }
//
// console.log(processedStructure(structure));

// 1- 7
function rand7() {
    return Math.floor(Math.random()*7) + 1;
}

// 1 - 10
function rand10() {
    return 10 - rand7()
}