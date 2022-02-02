import { useEffect } from "react"
import { useState } from "react/cjs/react.development"

export default function MyComponet() {
    const [count, setCount] = useState(0)
    // const [text, setText] = useState('')
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log('updateing document title');
        document.title = `clicked ${count} times`; 
    },[count])

    useEffect(() => {
        console.log('starting timer');
        const interver = setInterval(tick, 1000)

        return () => {
            console.log('componet unmunted');
            clearInterval(interver)
        }
    }, [])

    const addClick = () => {
      setCount((prevCount) => prevCount + 1)
    }

    const tick = () =>{
        setDate(new Date())
    }

    return(
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            {/* <p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </p> */}
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    )
}