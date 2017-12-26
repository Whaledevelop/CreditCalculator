import React from 'react';

import unitHandler from '../modules/unitHandler'
import RangeInput from './RangeInput'

const InputString = ({ input, onChange }) => {
    return (
        <div className = "inputString">
            <div style = {{ width: "25%"}}>
                { input.label }
            </div>
            <div style = {{ width: "45%" }}>
                <RangeInput
                    input = { input }
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
