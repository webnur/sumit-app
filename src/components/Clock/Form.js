import React from "react";

export default class Form extends React.Component {

    state = {
        title: 'javascript',
        text: 'javascript is awesome',
        library: 'React',
        isAwesome: true
    }
    hendleChange = (e) => {
        
        if(e.target.type === 'text'){
            this.setState({
                title: e.target.value
            })
        } else if(e.target.type === 'textarea') {
            this.setState({
                text: e.target.value
            })
        } else if(e.target.type === 'select-one') {
            this.setState({
                library: e.target.value
            })
        } else if(e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked
            })
        }
    }

    submitHandler = (e) => {
        const { title, text, library, isAwesome } = this.state;
        e.preventDefault();
        console.log(title, text, library, isAwesome);
    };
    
    render(){
        const {title, text, library, isAwesome} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="enter text" value={title} onChange={this.hendleChange} />
                    <br />
                    <br />
                    <textarea name="text" value={text} onChange={this.hendleChange}>javascript is awesome</textarea>
                    <br />
                    <br />
                    <select value={library} onChange={this.hendleChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.hendleChange} />
                    <br />
                    <br />
                    <input type="submit" value="submit" />
                </form>

               
            </div>
        )
    }
}