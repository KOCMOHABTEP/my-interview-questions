// Задача на предыдущее значение стейта, дело в том что useEffect асинхронный, поэтом
// @ts-ignore
import React, {useState, useRef, useEffect} from "react";

export default () => <div><Previous /></div>

function usePrevious(value) {
    const ref = useRef(value);

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};

const Previous = () => {
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);

    return (
        <>
            Current: {count} <br />
            Previous: {previousCount} <br/>
            <button onClick={() => setCount(prevCount => prevCount + 5)}>Random</button>
        </>
    )
}