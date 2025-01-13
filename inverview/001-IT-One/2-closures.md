## Замыкание
Написать пример замыкания и объяснить.\
Рассказать про лексическую область видимости. То что ищет сначала внутри, потом выше и тд

```javascript

function makeCounter() {
    let sum = 0;
    
    return function (b) {
        return sum += b;
    }
}

const count = makeCounter();

console.log(count())
console.log(count())
console.log(count())
```

