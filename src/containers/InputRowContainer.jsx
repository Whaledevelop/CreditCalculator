import React from 'react';
import {connect} from 'react-redux';

import changeValue from '../actions/creditPropsValues'
import InputRow from '../components/inputs/InputRow';

const InputRowContainer = ({ creditProp, onChangeValue }) => (
  <InputRow 
    creditProp = {creditProp}
    onChangeValue = {onChangeValue}
  />
)

const mapStateToProps = (state, ownProps) => {
  // Соединяем изменяемые значения инпутов из redux (value) 
  // с их неизменными данными (step, label, max, min и т.д.)
  const creditProp = Object.assign({}, ownProps.inputProps, 
    state.creditPropsValues.find(creditPropValue => (
      creditPropValue.id === ownProps.inputProps.id
    ))
  )
  return {
    creditProp: creditProp
  }
} 
 
export default connect(
  mapStateToProps,
  { onChangeValue: changeValue }
)(InputRowContainer);