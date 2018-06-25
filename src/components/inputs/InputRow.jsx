import React from 'react';

import RangeInput from './RangeInput'
import TextInput from './TextInput'

const InputRow = ({ input, onChange }) => {
    const rangeInputWidth = 400,
        inputStringHeight = 100;
    return (
        <div 
            className = "inputRow"
            style = {{ height: `${inputStringHeight}px`}}
        >
            <div className = "inputLabel">
                { input.label }
            </div>
            <RangeInput
                width = { rangeInputWidth }
                height = { inputStringHeight }
                input = { input }
                onChange = {onChange}
            />
            <TextInput
                input = {input}
                onChange = {onChange}
            />
        </div> 
    )
}
 
export default InputRow;
