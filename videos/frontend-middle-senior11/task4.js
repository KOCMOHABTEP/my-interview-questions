let obj = {a: 1};
let array = [obj];
obj.b = 5;
// obj = {...obj, b: 5}
console.log(obj);
console.log(array);
