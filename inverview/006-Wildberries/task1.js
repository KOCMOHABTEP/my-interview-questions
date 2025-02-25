// Сделать переворот строки без использолвания нативных методов
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
    let reversedWord = '';
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            reversedWord = str[i] + reversedWord;
        } else {
            reversedStr += reversedWord + ' ';
            reversedWord = '';
        }
    }
    return reversedStr + reversedWord;
}