import { useState } from "react/cjs/react.development"

function Counter(){
    const [count, setCount] = useState(0)

    // let i = 5;
    // const addFive = () => {
    //     while(i < 5){
    //         setCount((prevState) => prevState + 1)
    //         i += 1;
    //     }
    // }
    let i = 0;
    const addFive = () => {
        while (i < 5) {
            setCount((prevState) => prevState + 1);
            i += 1;
        }
    };


    return(
        <div>
            <p>{count}</p>
            <button type="button" onClick={() =>setCount((prevState) => prevState + 1)}>add one</button>
            <p>
                <button type="button" onClick={addFive}>add 5</button>
            </p>
        </div>
    )
}

export default Counter;