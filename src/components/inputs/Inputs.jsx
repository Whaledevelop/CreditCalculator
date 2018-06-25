import React from 'react';

import '../../css/inputs.css'
import InputRow from './InputRow';

const Inputs = ({ inputs, onChange }) => (
  <div id = "inputBlock">
    <h3 className = "blockHeader">Кредитный калькулятор</h3>
    {inputs.map(input =>  (
        <InputRow
            key = {input.id} 
            input = {input}
            onChange = {value => {
              onChange(input.id, value)
            }}
        />
    ))}
  </div>
)
 
export default Inputs;