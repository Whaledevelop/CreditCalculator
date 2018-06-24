import React from 'react';

import RangeInput from './RangeInput'
import TextInput from './TextInput'

const InputRow = ({ input, onChange, onWarning }) => {
    const 
        rangeInputWidth = 400,
        inputStringHeight = 70;

    return (
        <div style = {{ display: "flex", height: `${inputStringHeight}px`}}>
            <div style = {{ width: "22%", lineHeight: "70px" }}>
                { input.label }
            </div>
            <RangeInput
                input = { input }
                width = { rangeInputWidth }
                height = { inputStringHeight }
                onChange = {onChange}
            ></RangeInput>
            <TextInput
                input = {input}
                onCorrectChange = {onChange}
                onWarning = {onWarning}
            />
        </div> 
    )
}
 
export default InputRow;
