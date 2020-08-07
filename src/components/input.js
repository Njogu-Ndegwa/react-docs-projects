import React from 'react';
import {ScaleName} from '../utils';

export default class TemparatureInput extends React.Component {


    handleChange = (e) => {
        e.preventDefault()
        this.props.onTemparatureChange(e.target.value)
    }

    render() {
        const {scale, temparature} = this.props;
        return (
            <>
                <fieldset>
        <legend>Enter the temparature in {ScaleName[scale]}</legend>
                    <input
                        value={temparature}
                        onChange={this.handleChange} />
                </fieldset>
                
            </>
        )
    }
}