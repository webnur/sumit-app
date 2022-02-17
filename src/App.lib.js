import React from "react";
import { useReducer } from "react";
import ComponentA from "./components/ComponentB";

export const countContext = React.createContext()

const initialState = 0;

const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default: 
        return state;

    }
}
function App() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="app">
            <div>
               <h2>Count : {count}</h2>

               <countContext.Provider value={{countDispatch: dispatch}}>
                    <ComponentA />
               </countContext.Provider>
            </div>
          
             
         
        </div>
    );
}

export default App;


