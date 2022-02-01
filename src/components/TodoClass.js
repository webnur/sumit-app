import React from "react";

export default class Todo extends React.Component {
    state = {
        todo: '',
        warning: null
    }
  
    handleInput = (e) =>{
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? 'you need javascript skill to complete the task, do you have it' : null

        this.setState({
            todo: inputValue,
            warning,
        })
    }

  
    render(){
        const {todo, warning} = this.state
        return(
            <div>
                <p>{todo}</p>
                <p>
                    <textarea name="todo" value={todo} onChange={this.handleInput} cols="30" rows="5"></textarea>
                </p>
                <h2>{warning || 'good choice'}</h2>
            </div>
        )
    }
}