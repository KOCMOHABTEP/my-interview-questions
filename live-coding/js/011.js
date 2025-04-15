// // Казак
// // А роза упала на лапу Азора?
// // Do geese see God?
// // Madam, I'm Adam
//
// function isEquals(str1, str2) {
//     return str1.toLowerCase() === str2.toLowerCase();
// }
//
// function isLetter(char) {
//     return char.toLowerCase() !== char.toUpperCase();
// }
//
// function isPalindrome(word) {
//     let start = 0;
//     let end = word.length - 1;
//
//     while (start < end) {
//         const firstChar = word[start];
//         const secondChar = word[end];
//
//         if (!isLetter(firstChar)) {
//             start += 1;
//             continue;
//         }
//
//         if (!isLetter(secondChar)) {
//             end -= 1;
//             continue;
//         }
//
//         if (!isEquals(firstChar, secondChar)) {
//             return false;
//         }
//
//         start += 1;
//         end -= 1;
//     }
//
//     return true;
// }
//
// console.log(isPalindrome('Казак'))
// console.log(isPalindrome('А роза упала на лапу Азора?'))
// console.log(isPalindrome('Do geese see God?'))
// console.log(isPalindrome('Madam, I\'m Adam'))

// function isPalindromeRegex(str) {
//     // Удаляем все неалфавитные символы
//     const cleaned = str.replace(/[^A-Za-z]/g, '');
//     console.log(cleaned)
//     // Сравниваем строку с ее обратной версией
//     return cleaned === cleaned.split('').reverse().join('');
// }
//
// // Тестирование
// console.log(isPalindromeRegex("A man, a plan, a canal: Panama")); // false
// console.log(isPalindromeRegex("Racecar")); // true
// console.log(isPalindromeRegex("No lemon, no melon!")); // false

