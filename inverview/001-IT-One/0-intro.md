# Собеседование IT-One 13.01.2024
## Решить задачу
```javascript
// Начальные данные
const users = [
    {id: 1, age: 30, name: 'Ваня', isAdmin: true},
    {id: 2, age: 30, name: 'Петя', isAdmin: false},
    {id: 3, age: 28, name: 'Вова', isAdmin: false},
    {id: 4, age: 28, name: 'Федя', isAdmin: false},
]
    
// Пример
const result = {
    30: {
        1: {
            age: 30, name: 'Ваня', isAdmin: true
        },
        2: {
            age: 30, name: 'Петя', isAdmin: false
        }
    },
    28: {
        3: {
            age: 28, name: 'Вова', isAdmin: false
        },
        4: {
            age: 28, name: 'Федя', isAdmin: false
        }
    }
}
    
// Написать функцию getDataByField
const getDataByField = (arr, field) => {
    
    const struct = {};

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const {id, ...rest} = item;
        
        if (!struct[field]) {
            struct[field] = {};
        }
        
        struct[field][id] = rest;
    }
};

console.log(getDataByField(users, 'age'));

```

# Вопросы
## Что такое SOLID?

SOLID - это принципы разработки программного обеспечения, следуя которым Вы получите хороший код, который в дальнейшем будет хорошо масштабироваться и поддерживаться в рабочем состоянии.

S - Single Responsibility Principle - принцип единственной ответственности. Каждый класс должен иметь только одну зону ответственности.

O - Open closed Principle - принцип открытости-закрытости. Классы должны быть открыты для расширения, но закрыты для изменения.

L - Liskov substitution Principle - принцип подстановки Барбары Лисков. Должна быть возможность вместо базового (родительского) типа (класса) подставить любой его подтип (класс-наследник), при этом работа программы не должна измениться.

I -  Interface Segregation Principle - принцип разделения интерфейсов. Данный принцип обозначает, что не нужно заставлять клиента (класс) реализовывать интерфейс, который не имеет к нему отношения.

D - Dependency Inversion Principle - принцип инверсии зависимостей. Модули верхнего уровня не должны зависеть от модулей нижнего уровня. И те, и другие должны зависеть от абстракции. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.

---