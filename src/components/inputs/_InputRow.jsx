import React from 'react';

import RangeInput from './rangeInput/_RangeInput'
import NumberInput from './numberInput/NumberInput'

const InputRow = ({ input, onChange }) => {
    const inputStringHeight = 100;
    return (
        <div 
            className = "inputRow"
            style = {{ height: `${inputStringHeight}px`}}
        >
            <div className = "inputLabel">
                { input.label }
            </div>
            <RangeInput
                width = {400}
                height = { inputStringHeight }
                input = { input }
                onChange = {onChange}
            />
            <NumberInput
                input = {input}
                onChange = {onChange}
            />
        </div> 
    )
}
 
export default InputRow;
