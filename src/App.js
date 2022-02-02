
import { useState } from 'react/cjs/react.development';
import MyComponet from './components/MyComponet';
//import MyComponetClass from './components/MyComponetClass';


export default function App () {

    const [show, setShow] = useState(true)

 
        return (
            <div className='todo'>
               <h2>we shall learn useEfect() today</h2>

               {/* <MyComponetClass /> */}             
               <div>{show && <MyComponet />}</div>
               <p>
                   <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>{show ? 'Hide Post' : 'Show Post'}</button>
               </p>
            </div>
        )  
    
}
