const groupAnagrams = arr => {
    const hash = {};

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const id = item.split('').sort().join('');

        if (!hash[id]) {
            hash[id] = [item];
        } else {
            hash[id].push(item);
        }
    }

    return Object.values(hash);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))