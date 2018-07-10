import React, { Component } from 'react';

import unitHandler from '../../../modules/unitHandler';
import ErrorMessage from './ErrorMessage';

class NumberInput extends Component {
  handleInputValue(e) {
    if (!isNaN(e.target.value)) {
      this.props.onChange(e.target.value);
    }   
  }

  render() { 
    const {value, unit, max, min, step} = this.props.input;
    const inputColor = (value < min || value > max || isNaN(value)) 
      ? "#E31638" : "#757375"
    return (  
      <div className = "textInputBlock">
        <ErrorMessage input = {this.props.input}/>
        <input 
          type = "number"
          step = {step}
          className = "textInput"
          style = {{color : inputColor}}
          value = { value }
          onChange = {this.handleInputValue.bind(this)}
        />
        <span className = "textInputUnit">
            { unitHandler(value, unit) }
        </span>
    </div> 
    )
  }
}
 
export default NumberInput;