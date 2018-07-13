import React from 'react';

const NumberInput = ({value, valueStatus, creditProp, onChange}) => {
  const inputColor = valueStatus === "correct" ? "#757375" : "#E31638"
  return (  
    <input 
      type = "number"
      value = {value}
      step = {creditProp.step}
      max = {creditProp.max}
      min = {creditProp.min}
      className = "numberInput"
      style = {{color : inputColor}}  
      onChange = {onChange}
    />
  );
}
 
export default NumberInput;