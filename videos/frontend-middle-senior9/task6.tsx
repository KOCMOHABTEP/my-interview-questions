// @ts-ignore
import React, {useState, useEffect, useRef} from "react";

function logMetric(date: string) {
    // fetch('/api/metric', date)
}

const Clock = () => {
    const [currentDate, setCurrentDate] = useState(() => (new Date()).toISOString());
    const dateRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const cDate = (new Date()).toISOString();
            setCurrentDate(cDate);
            dateRef.current = cDate;
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        return () => {
            logMetric(dateRef.current)
        }
    })

    return <h1>{currentDate}</h1>
}