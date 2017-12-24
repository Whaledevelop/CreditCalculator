import React, { Component } from 'react';
import { connect } from 'react-redux'

import changeValue from '../actions/inputs'

import InputString from '../components/InputString'

class InputBlockContainer extends Component {
    render() { 
        return (
            <div id = "inputBlock">
                <h3 className = "blockHeader">Кредитный калькулятор</h3>
                {this.props.inputs.map(input => {
                    return (
                        <InputString
                            key = {input.id} 
                            input = {input}
                            onChange = {value => {
                                this.props.onHandleValue(input.id, value)
                            }}
                        />
                    )
                })}
            </div>
        )
    }
}
 
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
)(InputBlockContainer);