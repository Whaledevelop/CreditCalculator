import React, { Component } from 'react';
import unitHandler from '../../modules/unitHandler'

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.input.value
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    const {input, onCorrectChange, onWarning} = this.props
    let {value} = e.target;
    if (value >= input.max || value <= input.min) {
      onWarning(input.id, value)
    } else {
      onCorrectChange(input.id, value)
    }    
    this.setState({ value: value});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.input.value !== this.state.value) {
      this.setState({ 
        value : nextProps.input.value
      })
    }
  }
  
  render() { 
    const {value} = this.state;
    const {max, min, unit} = this.props.input
    const inputColor = (value >= max || value <= min) 
      ? "red" : "#757375"

    return (  
      <div>
        <input 
            type = "text"
            className = "textInput"
            style = {{color : inputColor}}
            value = { value }
            onChange = { this.handleInput}
        />
        <span className = "unitSpan">
            { unitHandler(value, unit) }
        </span>
    </div> 
    )
  }
}
 
export default TextInput;