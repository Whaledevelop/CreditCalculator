import React from 'react';
import { connect } from 'react-redux'

import changeValue from '../actions/inputs'

import InputString from '../components/InputString'

const InputsBlockContainer = ({ inputs, onHandleValue }) => (
    <div id = "inputBlock">
        <h3 className = "blockHeader">Кредитный калькулятор</h3>
        {inputs.map(input => {
            return (
                <InputString
                    key = {input.id} 
                    input = {input}
                    onChange = {value => {
                        onHandleValue(input.id, value)
                    }}
                />
            )
        })}
    </div>
)

 
const mapStateToProps = (state) => {
    return {
        inputs: state.inputs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleValue: (id, value) => {
            dispatch(changeValue(id, value))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputsBlockContainer);