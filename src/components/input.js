import React from 'react';
import { ScaleName } from '../utils';

export default function TemparatureInput({ scale, temparature, onTemparatureChange }) {


    const handleChange = (e) => {
        e.preventDefault()
        onTemparatureChange(e.target.value)
    }


    return (
        <>
            <fieldset>
                <legend>Enter the temparature in {ScaleName[scale]}</legend>
                <input
                    value={temparature}
                    onChange={handleChange} />
            </fieldset>

        </>
    );
}
