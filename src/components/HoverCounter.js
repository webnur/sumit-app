// VIDEO NO 13
// import withCounter from "./HOC/withCounter";


// VIDEO NO 12
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

//VIDEO NO 13

// function HoverCounter(props) {
//     const { count, incrementCount } = props
//     return (
//         <div>
//             <h1 type="button" onMouseOver={incrementCount}> Hovered {count} Times</h1>
//         </div>
//     )
// }

// export default withCounter(HoverCounter)


// VIDEO NO 14

import React from "react";
export default function HoverCounter ({count, incrementCount}){
  
        return(
            <div>
                <h1 onMouseOver={incrementCount}> Hovered {count} Times</h1>
            </div>
        )
}

