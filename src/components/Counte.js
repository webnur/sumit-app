import { useReducer } from "react";

const initialState = 0;

const reduce = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
            case 'decriment':
                return state - 1;
                default:
                    return state;
    }
}

export function Counter (){
    const [count, dispatch] = useReducer(reduce, initialState)
    return(
        <div>
            <h1>count = {count}</h1>
            <button type="button" onClick={() => dispatch('increment')}>Incriment</button>
            <button type="button" onClick={() => dispatch('decriment')}>decriment</button>
        </div>
    )
}