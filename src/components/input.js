import React from 'react';
import BoilingVerdict from './boiling_verdict';
export default class TemparatureInput extends React.Component {
    state = {
        temparature: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ temparature: e.target.value })
    }

    render() {
        const { temparature } = this.state;
        return (
            <>
                <fieldset>
                    <legend>Enter the temparature in Celcius</legend>
                    <input
                        value={temparature}
                        onChange={this.handleChange} />
                </fieldset>
                <BoilingVerdict
                    temparature={temparature}
                />
            </>
        )
    }
}