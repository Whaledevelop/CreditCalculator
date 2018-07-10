import React from 'react';

import RangeInputBlock from './rangeInput/RangeInputBlock';

const InputRow = ({creditProp, onChangeValue}) => {
  const INPUT_STRING_HEIGHT = 100;
  return (  
    <div 
      className = "inputRow"
      style = {{ height: `${INPUT_STRING_HEIGHT}px`}}
    >
      <div className = "inputLabel">
        { creditProp.label }
      </div>
      <RangeInputBlock
          width = {400}
          height = { INPUT_STRING_HEIGHT }
          creditProp = { creditProp }
          onChange = { onChangeValue } 
      />
      {/* <NumberInput
          input = {input}
          onChange = {onChange}
      /> */}
    </div> 
  );
}
 
export default InputRow;