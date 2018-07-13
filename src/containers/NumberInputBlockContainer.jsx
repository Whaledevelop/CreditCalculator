import React, { Component } from 'react';
import NumberInputBlock from '../components/inputs/numberInput/NumberInputBlock';

class NumberInputBlockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.creditProp.value
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.creditProp.value !== this.state.inputValue) {
      this.setState({ 
        inputValue: nextProps.creditProp.value
      });
    }
  }

  handleNumberInput(e) {
    const {id, max, min} = this.props.creditProp;
    const {value} = e.target
    this.setState({ 
      inputValue: +value
    });
    if (value >= min && value <= max && !isNaN(value)) {
      this.props.onChange(id, +value)
    }
  }

  generateValueStatus() {
    const {max, min} = this.props.creditProp
    if (this.state.inputValue < min) {
      return `Введите значение больше ${min}`
    } else if (this.state.inputValue > max) {
      return `Введите значение меньше ${max}`
    } else if (isNaN(this.state.inputValue)) {
      return `Введите число`
    } else return "correct"
  } 

  render() {
    return (
      <NumberInputBlock
        value = {this.state.inputValue}
        valueStatus = {this.generateValueStatus()}
        creditProp = {this.props.creditProp}
        onChange = {this.handleNumberInput.bind(this)}
      />
    )
  }
}

export default NumberInputBlockContainer