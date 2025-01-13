### Код на промисы 

```javascript
console.log(1);

setTimeout(() => {
    console.log('timeOut 1')
}, 0);

console.log(2);

new Promise((resolve) => {
    console.log('Promise');
    setTimeout(() => {
        console.log('777')
    }, 0)
    resolve();
}).then(() => {
    console.log('then1')
}).then(() => {
    console.log('then2')
})

setTimeout(() => {
    console.log('timeOut 2')
}, 0);


console.log(7);
```

Ответ: 
1 
2 
Promise 
7 
then1
then2
timeOut1
777
timeOut2

---
# Для того чтобы понять, в каком порядке выполняются вызовы в данном коде, нужно знать, как работают **стек вызовов**, **очередь микрозадач (микротасков)** и **очередь макрозадач (макротасков)** в JavaScript. Давайте разберём по шагам:

---

## Основные понятия:

1. **Стек вызовов (Call Stack)**  
   Выполняет синхронный код поочерёдно. Если встречается асинхронный код (например, `setTimeout`, `Promise`), то он передаётся в соответствующие очереди, но сам стек продолжает работать только с синхронным кодом.

2. **Очередь "Микротасков" (Microtask Queue)**  
   Этот специальный приоритетный список выполняется **сразу, как только стек вызовов станет пустым**, но перед обработкой макротасков. Примеры микротасков:
    - Обработчики `.then()` в промисах
    - `MutationObserver`

3. **Очередь "Макротасков" (Macrotask Queue)**  
   Эта очередь выполняется после микротасков. Примеры макротасков:
    - `setTimeout`
    - `setInterval`
    - `I/O операций`

---

## Пошаговое выполнение кода:

Давайте идти строчка за строчкой:

```javascript
console.log(1);
```

- Это синхронный код. Сразу выводится в консоль: **`1`**.

---

```javascript
setTimeout(() => {
    console.log('timeOut 1');
}, 0);
```

- **Макротаск**. Передаётся в очередь макротасков и будет выполнен позже.

---

```javascript
console.log(2);
```

- Синхронный код. Сразу выводится в консоль: **`2`**.

---

```javascript
new Promise((resolve) => {
    console.log('Promise');
    setTimeout(() => {
        console.log('777');
    }, 0);
    resolve();
}).then(() => {
    console.log('then1');
}).then(() => {
    console.log('then2');
});
```

1. **Синхронный код в конструкторе промиса**:
   ```javascript
   console.log('Promise');
   ```
   Выводится в консоль: **`Promise`**.

2. **setTimeout внутри промиса**:
   ```javascript
   setTimeout(() => {
       console.log('777');
   }, 0);
   ```
   Это **макротаск**, так что добавляется в очередь макротасков.

3. **resolve()** выполняется:  
   Этот вызов создаёт микротаск для выполнения первого `.then()`:
   ```javascript
   .then(() => {
       console.log('then1');
   })
   ```

4. Второй `.then()`:
   ```javascript
   .then(() => {
       console.log('then2');
   });
   ```
   Создаёт ещё один микротаск, который выполнится сразу после первого.

---

```javascript
setTimeout(() => {
    console.log('timeOut 2')
}, 0);
```

- **Макротаск**. Добавляется в очередь макротасков.

---

```javascript
console.log(7);
```

- Синхронный код. Выводится в консоль: **`7`**.

---

## Итоговое выполнение (запуск микротасков и макротасков):

1. **Синхронный код завершён**, и стек вызовов становится пустым.  
   Сейчас в консоли:
   ```
   1
   2
   Promise
   7
   ```

2. **Микротаски:**
    - Выполняется первый `.then()`:
      ```javascript
      console.log('then1');
      ```
      В консоли:
      ```
      1
      2
      Promise
      7
      then1
      ```

    - Выполняется второй `.then()`:
      ```javascript
      console.log('then2');
      ```
      В консоли:
      ```
      1
      2
      Promise
      7
      then1
      then2
      ```

3. **Макротаски (первый цикл):**
    - Первый `setTimeout`:
      ```javascript
      console.log('timeOut 1');
      ```
      В консоли:
      ```
      1
      2
      Promise
      7
      then1
      then2
      timeOut 1
      ```

    - Второй `setTimeout` из промиса:
      ```javascript
      console.log('777');
      ```
      В консоли:
      ```
      1
      2
      Promise
      7
      then1
      then2
      timeOut 1
      777
      ```

    - Третий `setTimeout`:
      ```javascript
      console.log('timeOut 2');
      ```
      В консоли:
      ```
      1
      2
      Promise
      7
      then1
      then2
      timeOut 1
      777
      timeOut 2
      ```

---

## Полный итоговый вывод:
```
1
2
Promise
7
then1
then2
timeOut 1
777
timeOut 2
```