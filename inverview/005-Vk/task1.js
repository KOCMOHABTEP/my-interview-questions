let num = 10,
    obj1 = {
        value: 'first value'
    },
    obj2 = {
        value: 'second value'
    },
    obj3 = obj2;

console.log({
    num,
    obj1,
    obj2,
    obj3
})

function change(num, obj1, obj2) {
    num = num = 10;
    obj1 = obj2;
    obj2.value = 'new value';
}

change(num, obj1, obj2);

console.log(num); // ? 10
console.log(obj1.value); // ? first value
console.log(obj2.value); // ? new value
console.log(obj3.value); // ? new value