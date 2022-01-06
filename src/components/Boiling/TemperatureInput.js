import React from 'react';

const scaleNames = {
    c: 'celcius',
    f: 'fahrenheit'
}

// export default class TemperatureInput extends React.Component {

//     state = {
//         temperature: '',
//     };

//     onTemperatureChange = (e) => {
//         this.setState({
//             temperature: e.target.value
//         });
//     };

//     render() {
        
//         const { temperature, scale, onTemperatureChange} = this.props
//         return (
//             <div>
//                 <fieldset>
//                     <legend>Enter temperature in {scaleNames[scale]}: </legend>
//                     <input type="text" value={temperature} onChange={onTemperatureChange} />
//                 </fieldset>


//             </div>

//         );
//     }
// }

export default function TemperatureInput({ temperature, scale, onTemperatureChange}){
         
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}: </legend>
                    <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e, scale)} />
                </fieldset>


            </div>

        );

}