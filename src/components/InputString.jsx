import React from 'react';

import unitHandler from '../modules/unitHandler'

const InputString = ({ input, onChange }) => {
    return (
        <div className = "inputString">
            <div style = {{ width: "25%"}}>
                { input.label }
            </div>
            <div style = {{ width: "45%" }}>
                <input 
                    type = "range"
                    min = { input.min }
                    max = { input.max }
                    step = { input.step }
                    value = { input.value }
                    onChange = {e => {          
                        onChange (e.target.value)
                    }}
                />
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
