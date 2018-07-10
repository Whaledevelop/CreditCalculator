import React from 'react';
import {connect} from 'react-redux';

import changeValue from '../actions/creditPropsValues'
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
            dispatch(changeValue(id, value))
        }
    }
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputsContainer);
