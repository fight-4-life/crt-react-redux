import React, {useEffect, useState} from "react";

export function Time() {
    const [time, setTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date().toLocaleString()), 1000)

        return () => clearInterval(interval)
    }, [])

    return <p>Дата и время сейчас: {time}</p>
}