import React from 'react';
import InputRow from './InputRow'

const Inputs = ({inputs, onHandleValue}) => (
  <div id = "inputBlock">
    <h3 className = "blockHeader">Кредитный калькулятор</h3>
    {inputs.map(input => {
        return (
            <InputRow
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
 
export default Inputs;