import React from 'react';
import {connect} from 'react-redux';

import changeValue from '../actions/creditProps'
import Inputs from '../components/inputs/Inputs';

const InputsContainer = ({inputs, onHandleValue}) => (
  <Inputs 
    inputs = {inputs}
    onChange = {onHandleValue}
  />
)

const mapStateToProps = state =>  state

const mapDispatchToProps = dispatch => {
    return {
        onHandleValue: (id, value) => {
            console.log (id, value)
            dispatch(changeValue(id, value))
        }
    }
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputsContainer);
