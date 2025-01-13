## Деструктуризация
Нужно решить задачу

```javascript

const data = [
    {order: 4, name: "Ivan"},
    {order: 1, name: "Petya"},
    {order: 3, name: "Dima"},
    {order: 2, name: "Egor"},
    {order: 5, name: "Slava"},
]

data.sort((a, b) => a.order - b.order);
// как сделать чтобы можно было сделать так
// data.sort((a, b) => orderA - orderB);

// Ответ
data.sort(({order: orderA}, {order: orderB}) => orderA - orderB);

```
