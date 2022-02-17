import { useReducer } from "react";


const initialState = {
    counter: 0,
    counter2: 0
}

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, counter: state.counter + action.value};
        case 'decrement':
                return {...state, counter: state.counter - action.value};
        case 'increment2':
            return {...state, counter2: state.counter2 + action.value};
        case 'decrement2' :
            return {...state, counter2: state.counter2 - action.value};
        default:
            return state;
    }
}

export default function ComplexCounter(){
    const [count, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <div className="conuter-one">
                <h1>counter one = {count.counter}</h1>
                <button type="button" onClick={() => dispatch({
                    type: 'increment',
                    value: 1
                })}>Incriment one counter</button>
                <button type="button" onClick={() => dispatch({
                    type: 'decrement',
                    value: 1
                })}>decrement one counter</button>
            </div>
            <br />
            <div className="counter-two">
                <h2>counter number 2 = {count.counter2}</h2>
                <button type="button" onClick={() => dispatch({
                    type: 'increment2',
                    value: 1
                })}>increment two conuter</button>
                <button type="button" onClick={() => dispatch({
                    type: 'decrement2',
                    value: 1
                })}>decrement two counter</button>
            </div>
        </div>
    )
}