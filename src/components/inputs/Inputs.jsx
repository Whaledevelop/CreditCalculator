import React, {Component} from 'react';
import InputRow from './InputRow'

class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            warning: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleWarning = this.handleWarning.bind(this)
    }

    handleChange(id, value) {
        this.props.onHandleValue(id, value)
    }

    handleWarning(id, value) {
        let input = this.props.inputs.find(input => input.id === id);
        let warning = input.label + "не может быть " + 
            (value <= input.min) 
            ? "меньше " + input.min
            : "больше " + input.max;
        this.setState({ warning : warning})
        
    }

    render() {
        return (
            <div id = "inputBlock">
                <div style = {{display : "flex"}}>
                    <h3 className = "blockHeader">Кредитный калькулятор</h3>
                    <h3>{this.state.warning}</h3>
                </div>
                {this.props.inputs.map(input => (
                    <InputRow
                        key = {input.id} 
                        input = {input}
                        onChange = {this.handleChange}
                        onWarning = {this.handleWarning}
                    />
                ))}
            </div>
        )
    }
}
export default Inputs;