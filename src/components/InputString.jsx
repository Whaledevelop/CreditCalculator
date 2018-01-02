import React from 'react';

import unitHandler from '../modules/unitHandler'
import RangeInput from './RangeInput'

const InputString = ({ input, onChange }) => {
    const 
        rangeInputWidth = 400,
        inputStringHeight = 70;

    return (
        <div style = {{ display: "flex", height: `${inputStringHeight}px`}}>
            <div style = {{ width: "22%", lineHeight: "70px" }}>
                { input.label }
            </div>
            <div style = {{ width: `${rangeInputWidth}px`}}>
                <RangeInput
                    input = { input }
                    width = { rangeInputWidth }
                    height = { inputStringHeight }
                    onChange = {value => {
                        onChange (value)
                    }}
                ></RangeInput>
            </div>
            <div>
                <input 
                    type = "text"
                    className = "textInput"
                    value = { input.value }
                    onChange = {e => {
                        onChange (e.target.value)
                    }}
                />
                <span className = "unitSpan">
                    { unitHandler(input.value, input.unit) }
                </span>
            </div> 
        </div> 
    )
}
 
export default InputString;
