import React, { Component } from 'react';

import unitHandler from '../../modules/unitHandler';

class TextInput extends Component {
  handleInputValue(e) {
    if (!isNaN(e.target.value)) {
      this.props.onChange(e.target.value);
    }   
  }
  
  renderErrorMessage() {
    let {value, max, min, label} = this.props.input, message;
    if (value < min) {
      message = `${label} должна быть больше ${min}`;
    } if (value > max) {
      message = `${label} должна быть меньше ${max}`;
    }
    return <div className = "errorMessage"> {message} </div>
  }

  render() { 
    const {value, unit, max, min, step} = this.props.input;
    const inputColor = (value < min || value > max || isNaN(value)) 
      ? "#E31638" : "#757375"
    return (  
      <div className = "textInputBlock">
        {this.renderErrorMessage()}
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
 
export default TextInput;