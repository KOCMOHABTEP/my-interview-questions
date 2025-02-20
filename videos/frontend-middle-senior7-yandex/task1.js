function strJoin(del, ...elements) {
    return elements.join(del);
}

function strJoinEs5() {
    const args = Array.from(arguments);
    const separator = args[0];

    const result = args.slice(1);
    console.log(result);

    return result.join(separator);
}

// console.log(strJoin(',', 'a', 'b', 'c', 'd')) // a.b.c
// console.log(strJoin('-', 'a', 'b', 'c', 'd', 'e', 'f')) // a-b-c-d-e-f

console.log(strJoinEs5(',', 'a', 'b', 'c', 'd')) // a.b.c
console.log(strJoinEs5('-', 'a', 'b', 'c', 'd', 'e', 'f')) // a-b-c-d-e-f