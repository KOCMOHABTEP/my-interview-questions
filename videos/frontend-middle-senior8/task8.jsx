import React, {useState, useEffect} from "react";

const fetchCall = () => Promise.resolve(Math.random());


const NumberAndScroll = () => {
    const [number, setNumber] = useState(0);
    // const [scroll, setScroll] = useState(0);
    const [scroll, setScroll] = useState(window.scrollY);

    // useEffect(async() => {
    //     setNumber(await fetchCall());
    //
    //     window.addEventListener('scroll', () => setScroll(window.scrollY));
    //
    //     return () => window.removeEventListener('scroll', () => setScroll(window.scrollY));
    // }, []);

    useEffect(() => {

        const fetchNumbers = async () => {
            try {
                const response = await fetchCall();
                setNumber(await fetchCall());
            } catch (e) {
                console.log(e);
            }
        }

        fetchNumbers();
    }, []);

    useEffect(() => {
        const scrollHandler = () => setScroll(window.scrollY)


        window.addEventListener('scroll', scrollHandler); // Здесь можно добавить trottle

        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);


    return (
        <div>
            <div> Number: {number}</div>
            <div> ScrollY: {scroll}</div>
        </div>
    )
}