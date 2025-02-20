// В каком порядке вызовется

export default function App() {
    return(
        <Parent>
            <Child />
        </Parent>
    )
}

function Parent({children}) {
    console.log(1)

    useEffect(() => {
        console.log(2);
    }, []);

    return <div>{children}</div>
}

function Child() {
    console.log(3);

    useEffect(() => {
        console.log(4);
    }, []);

    return <h1>Hi!</h1>
}

// 1 3 4 2
// Сначала синхронный код, далее 4 потому что родитель закончит рендер после всех его дочерних