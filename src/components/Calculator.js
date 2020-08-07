import React, { useState } from 'react';
import TemparatureInput from './input';
import BoilingVerdict from './boiling_verdict';
import { TryConvert, toCelcius, toFarenheit } from '../utils';

export default function Calculator() {

    const [temparature, setTemparature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelciusChange = (temparature) => {
        setTemparature(temparature);
        setScale("c");
    }

    const handleFarenheitChange = (temparature) => {
        setTemparature(temparature);
        setScale("f");
    }

    const celcius = scale === "f" ? TryConvert(temparature, toCelcius) : temparature;
    const farenheit = scale === "c" ? TryConvert(temparature, toFarenheit) : temparature;

    return (
        <div>
            <TemparatureInput
                scale="c"
                onTemparatureChange={handleCelciusChange}
                temparature={celcius}
            />
            <TemparatureInput
                scale="f"
                onTemparatureChange={handleFarenheitChange}
                temparature={farenheit}
            />

            <BoilingVerdict
                temparature={celcius}
            />
        </div>
    )
}