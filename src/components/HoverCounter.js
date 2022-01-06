import withCounter from "./HOC/withCounter";

// import React from "react";
// export default class HoverCounter extends React.Component {
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
//                 <h1 type="button" onMouseOver={this.hendleChange}> Hovered {count} Times</h1>
//             </div>
//         )
//     }
// }


function HoverCounter(props) {
    const { count, incrementCount } = props
    return (
        <div>
            <h1 type="button" onMouseOver={incrementCount}> Hovered {count} Times</h1>
        </div>
    )
}

export default withCounter(HoverCounter)
