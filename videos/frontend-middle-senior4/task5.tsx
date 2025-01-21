// Что будет если нажать 3 раза
// @ts-ignore
import React, {useState} from "react";

export default () => <div><Clicker /></div>

function Clicker() {
    const [clicks, setClicks] = useState(0);

    const onClick = () => {
        setTimeout(() => {
            setClicks(clicks + 1); // Здесь замыкается значение 0, чтобы поправить нужно setClicks(click => click + 1);
        }, 2000)
    }

    return (
        <>
            {clicks}
            <button onClick={onClick}>
                Increment
            </button>
        </>
    )
}