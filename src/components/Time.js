import { useRef } from "react"
import { useEffect, useState } from "react/cjs/react.development"

function Time() {
    const [time, setTime] =useState(new Date())
    const buttonRef = useRef()

    const tick = () => {
        setTime(new Date())
    }
    useEffect(() => {
        buttonRef.current = setInterval(tick, 1000)
        
        return () => {
            clearInterval(buttonRef.current)
        }
    }, [])
    return(
        <div>
            <h2>{time.toLocaleTimeString()}</h2>
            <button type="button" onClick={() => clearInterval(buttonRef.current)}>CleanUp</button>
        </div>
    )
}

export default Time;