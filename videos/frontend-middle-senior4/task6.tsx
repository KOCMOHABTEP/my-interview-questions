// У нас заблокируется UI на время выполнения функции
// Функция переданная в useState выполняется синхронно, если setCount вызываем то вызывается синхронно, но значение изменяется асинхронно.
// Планирует ререндер, но потом когда ререндер произойдет, значение изменится.
// Как исправить?
// вынести heavyFunc в useEffect, а также исправить const [count, setCount] = useState(() => heavyFunc(props.count));
// @ts-ignore
import React, {useState} from "react";

const heavyFunc = (count) => {
    // hard calc
    // 10 sec
}

const LazyInit = (props) => {
    // const [count, setCount] = useState(heavyFunc(props.count));
    const [count, setCount] = useState(() => heavyFunc(props.count));

    return (
        <>
            {count}
            <button onClick={() => setCount((prevProps) => ++prevProps)}>
                Increment
            </button>
        </>
    )
}