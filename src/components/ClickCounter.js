import withCounter from "./HOC/withCounter"

// import React from "react";

// export default class ClickCounter extends React.Component {
//     state = {
//         count: 0
//     }
//     hendleChange = () => {
//       this.setState((prevState) => ({ count: prevState.count + 1}));
//     }
//     render(){
//         const {count} = this.state
//         return(
//             <div>
//                 <button type="button" onClick={this.hendleChange}> Clicked {count} Times</button>
//             </div>
//         )
//     }
// }


function ClickCounter(props) {
    const { count, incrementCount } = props
    return (
        <div>
            <button type="button" onClick={incrementCount}> Clicked {count} Times</button>
        </div>
    )
}

export default withCounter(ClickCounter)