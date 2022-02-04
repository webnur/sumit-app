import React from 'react';


const Input = ({type, placeholder, setText}, ref) => {
    // const [text, setText] = useState('')
    return (
        <div>
           
            <input ref={ref}  type={type} placeholder={placeholder} onChange={(e) => setText(e.target.value)} />
        </div>
    );
};

const forwaredRef = React.forwardRef(Input)

export default forwaredRef;