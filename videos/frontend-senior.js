// Источник https://www.youtube.com/watch?v=4vL-Qf8XJAE&ab_channel=m1x-frontend
// Яндекс код
/**
 * Сборка
 */
// Какие сборщики использовал?
// Webpack, Vite, Bun

/**
 * Браузер
 */
// Что происходит когда пишу запрос в адресную строку в браузере?
// Какие этапы отрисовки страниц знаешь? HTML дерево, CSS дерево, Layout, Painting
// Браузерное хранилищше? Куки, LocalStorage, IndexDB, SessionStorage (живет пока не закроется вкладка в браузере)
// Подробнее про куки и Storage

/**
 * CSS
 */
// Что такое специфичность? Какой вес у id, class, inline?
// Написать свой селектор
// Что такое всплытие и погружение? Hoisting. Можно предотвратить event.stopPropagation(), а в CSS pointer-events: none

/**
 * JS
 */
// Ecmascript 6. Что там появилось?
// const, let - в чем отличие от var
// Что такое event loop? Сначала синхронный код, микротаски (промисы, кью-микротаск, Mutation Observer), макротаски setTimeout, setInterval, webapi

// Написать функцию fetchAll, которая принимает массив urls
const links = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
]

const fetchAll = async (urls) => {
    return await Promise.all(urls.map(url => fetch(url)));
}
// и еще вариант, который заблочит потом

async function fetchAll (urls) {
    const result = [];
    links.forEach(link => {
        const res = await fetch(link);
        result.push(res);
    })
}

/**
 * React
 */
// Что такое сверка (reconciliation)?
// Что заставялет перерендеривать компонентов?
// Что такое JSX под капотом?

// useEffect, useLayoutEffect, в чем разница?
// useLayoutEffect - синхронный, отрабатывает до начала рендера элементов
// useEffect - асинхронный, отрабатывает после рендера элементов и вызывает коллбек который помещен в него

// Какие хуки для мемоизации?
// React.memo и функция сравнения пропсов. Пропсы проверяются по примитивам, если это ссылки - перерендер будет происходить. Проверяется "поверхностно"
// Способ глубокого сравнения объектов?
// React 18 - батчинг. Что это такое?
// React portal. Что это?

/**
 * Оптимизация
 */
// Оптимизация сборки приложения?
// 1 Сжатие, css, js, html, svg, png, jpg
// React - lazyload
// 2 Дробление кода на чанки кода - подргужать страницу порциями когда они нужны. В NGINX можно gzip настроить
// 3 Кэш шрифтов

/**
 * Интервью с техлидом
 */
// 1. SSR использовался ли?
// 2. Webpack сборки, как оптимизировали бандл?
// 3. Кросдоменное общение? Пример: Post message
// 4. CORS, какие технологии? 1ый способ - Revrite запрос на NGINX, 2ой способ - JSONP
// 5. Опыт работы с куки, session storage, local storage
// 6. HTTP, что в основе gRPC протоколов? TCP IP как работает. UDP как работает? Чем отличается TCP от UDP? Какой протокол гарантирует целостность? (Ответ: TCP)
// 7. Опыт препроцессоров, постпроцессоров
// 8. CSS модули был опыт?
// 9. Оптимизации React приложений? Мемоизация, Lazy, кэширование
// 10. Плюсы и минусы иммутабельности? Новая ссылка на массив. В реакте должны работать с новыми данными
// 11. Redux toolkit, какие еще state менеджеры использовались на проектах?
// 12. Какие библиотеки использовались для запросов? Axios, React Query, RTK Query?

