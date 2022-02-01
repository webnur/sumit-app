import React from 'react';
import Counter from './components/Counter';
import Todo from './components/Todo';


export default class App extends React.Component {



    render() {
        return (
            <div className='todo'>
                <Todo />
               
                <Counter />
            </div>
        )  
    }
}
