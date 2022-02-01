import { useState } from "react";

function Todo(){
        
    const [todo, setTodo] = useState('')
    const [warning, setWarning] = useState(null)
 
    const handleInput = (e) =>{
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js') ? 'you need javascript skill to complete the task, do you have it' : null

        setTodo(inputValue)
        setWarning(updatedWarning)

      
    }
    
   
    return(
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} cols="30" rows="5"></textarea>
            </p>
            <h2>{warning || 'good choice'}</h2>
        </div>
    )
}

export default Todo;