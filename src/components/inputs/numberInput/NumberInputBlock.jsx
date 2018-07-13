import React from 'react';

import ErrorMessage from './ErrorMessage';
import NumberInput from './NumberInput';
import UnitHandler from './UnitHandler'

const NumberInputBlock = ({ value, valueStatus, creditProp, onChange}) => {
  return (  
    <div className = "numberInputBlock">
      <ErrorMessage
        valueStatus = {valueStatus}
      />
      <NumberInput
        value = {value}
        valueStatus = {valueStatus}
        creditProp = {creditProp}
        onChange = {onChange}
      />
      <UnitHandler
        value = {value}
        unit = {creditProp.unit}
      />
    </div>
  );
}
 
export default NumberInputBlock;

 
 