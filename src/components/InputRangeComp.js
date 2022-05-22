import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';

class InputRangeComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 5,
            value2: 10,
            value3: 10,
            value4: {
                min: 5,
                max: 10,
            },
            value5: {
                min: 3,
                max: 7,
            },
        };
    }

    render() {
        return (
            <form className="form">
                <InputRange
                    maxValue={20}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                    onChangeComplete={value => console.log(value)} />
            </form>
        );
    }
}

export default InputRangeComp;