// Источник: https://www.youtube.com/watch?v=PB_Fa-g1yBE&ab_channel=%D0%9C%D0%B8%D1%88%D0%B0-FrontendDev
// Как можно создать функцию
const exp = function () {}; // function expression
function a() {}  // function declaration
const exp1 = () => {}; // arrow func
(function () {})() // iife

// В чем разница между func expression и function declaration?

// Что выведется?
function makeCounter () {
    let a = 0;

    return function () {
        return a += 1;
    };
}

const count = makeCounter();

console.log(count()) // 1
console.log(count()) // 2
console.log(count()) // 3

// Почему так происходит? Почему переменная живет даже после того как функция завершила свое выполнение?
// Лексическое окружение остается в памяти, сначала идет поиск переменной A во внутреннем лексическом окружении,
// а потом во внешнем, находит

/**
 * Контекст
 */

// Контекст
var user = {
    name: 'Ivan',
    hi() {
        console.log(this.name);
    },
    hi2: () => {
        console.log(this.name); // undefined
    }
}
// Для стрелочных функций не работает bind, call, apply

const {hi} = user;
hi() // ? -- undefined, потому что контекст потеряется, потерялся в момент вызова
// контекст опеределяется в момент вызова
// чтобы привязать контекст
hi.bind(user)();

/**
 * Event loop
 */

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);

// 1 7 3 5 2 6 4
// Как работает event loop?
// микротаски: promise,queueMicrotask, mutation observer
// макротаски: setTimeout, setInterval, dom events

/**
 * Функциональное программирование
 */
// Какие концепции применял?
// Чистые фукнции, карирование, функции высшего порядка
// 1. Что такое чистая функция?
// 2. Что такое функции высшего порядка? - Функции которые применяют функции в качестве аргумента, map, reduce, filter
// А какие еще функции не из спецификации - debounce, trottle

/**
 * Задача
 */

// реализовать свой map
// [].map(item => ({...item, a: 1}))

const _map = (arr, cb) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i], i, arr));
    }

    return result;
};

console.log('MAP', _map([1,2,3], (item) => item * 2 ))

/**
 * REACT
 */
// Что такое props?
// Что такое state?
// Этапы жизненгного цикла? - Инициализация, монтирование, обновление, размонтирование
// Какие есть хуки? Какими пользовался?
// Разница useEffect и useLayoutEffect ?
// Пример: useEffect в child и useEffect в родителе, какой вызовется первый? Потому что родитель завершает рендер после того как отрендерится дочерний компонент
// Зачем нужен useRef? - Получить ссылку на DOM елемент. Вар2 - хранить значения, useRef это один и тот же объект при каждом рендере
// Реализовать свой useRef
const useRef = (initialVal) => {

    return useMemo(() => {
        current: initialVal
    }, []);
};
// Зачем нужны ключи в React? Чтобы реакт понимал в процессе реконсиляции какие элементы массива добавились, удалились, обновились
// Очередь рендера и как сделать так чтобы компонент не перерендевался. Вар1. React.memo и Вар2. Вынести логику в отдельный компонент
// Варианты useContext? Создание глобального состояния и чтобы не props drilling.
/**
 * API
 */
// Какие протоколы для API? - Websocket, HTTP, GRPC, GraphQL
// Каким образом происходила интеграция Websocket в React?
// Методы оптимизации селекторов redux?

