import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import {convert, toCelsius, toFahrenheit} from '../../lib/convator'


export default class Calculator extends React.Component {

    state = {temperature: '', scale: 'c'}

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        })
    }

    render(){
        const {temperature, scale} = this.state
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return(
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleChange} ></TemperatureInput>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleChange}></TemperatureInput>
                <BoilingVerdict celsius={parseFloat(temperature)} />
            
            </div>
           
        )
    }
}

