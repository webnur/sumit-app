// // eslint-disable-next-line no-unused-vars
// import { useContext } from 'react'
// import { conuterContext } from '../App'

// export default function ComponentB(){
//     const countContext = useContext(conuterContext)
//     return(
//         <div>
//             <button type="button" onClick={() => countContext.countDispatch('increment')}>Increment</button>
//             <button type="button" onClick={() => countContext.countDispatch('decrement')}> Decrement</button>
//         </div>
//     )
// }

import { useContext } from "react"
import { countContext } from "../App"

export default function ComponentB (){
    const conuterContext = useContext(countContext)
    return(
        <div>
            <button type="button" onClick={() => conuterContext.countDispatch('increment')}>Increment</button>
            <button type="button" onClick={() => conuterContext.countDispatch('decrement')}>Decrement</button>
        </div>
    )
}