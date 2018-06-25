import React, { Component } from 'react';

import unitHandler from '../../modules/unitHandler';

class TextInput extends Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    const {input, onChange} = this.props;
    let {value} = e.target;
    if (value >= input.max) {
        value = input.max
    } 
    onChange (value)
  }

  render() { 
    const {value, unit, max, min} = this.props.input;
    const inputColor = (value < min || value > max) ? "red" : "#757375"
    return (  
      <div>
        <input 
            type = "text"
            className = "textInput"
            style = {{color : inputColor}}
            value = { value }
            onChange = {this.handleInput}
        />
        <span className = "unitSpan">
            { unitHandler(value, unit) }
        </span>
    </div> 
    )
  }
}
 
export default TextInput;