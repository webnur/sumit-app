import { useRef } from "react"
import { useEffect, useState} from "react/cjs/react.development"
import Input from "./Input";

export default function  Form() {
    const [text, setText] = useState('')

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return(
        <div>
            <p>{text}</p>
            <p>
                <Input ref={inputRef} type="text" placeholder="Enter Something" setText={setText}/>
            </p>
        </div>
    )
}