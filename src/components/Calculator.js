import React from 'react';
import TemparatureInput from './input';
import BoilingVerdict from './boiling_verdict';
import { TryConvert, toCelcius, toFarenheit } from '../utils';

export default class Calculator extends React.Component {

    state = {
        temparature: '',
        scale: 'c'
    }

    handleCelciusChange = (temparature) => {
        this.setState({ scale: 'c', temparature })
    }

    handleFarenheitChange = (temparature) => {
        this.setState({ scale: 'f', temparature })
    }

    render() {
        const { scale, temparature } = this.state;
        const celcius = scale === "f" ? TryConvert(temparature, toCelcius) : temparature;
        const farenheit = scale === "c" ? TryConvert(temparature, toFarenheit) : temparature;
        return (
            <div>
                <TemparatureInput
                    scale="c"
                    onTemparatureChange={this.handleCelciusChange}
                    temparature={celcius}
                />
                <TemparatureInput
                    scale="f"
                    onTemparatureChange={this.handleFarenheitChange}
                    temparature={farenheit}
                />

                <BoilingVerdict
                    temparature={celcius}
                />
            </div>
        )
    }
}