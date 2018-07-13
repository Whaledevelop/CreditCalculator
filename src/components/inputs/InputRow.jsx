import React from 'react';

import RangeInput from './RangeInput';
import NumberInputBlockContainer from '../../containers/NumberInputBlockContainer';

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
      <RangeInput
          width = {400}
          height = { INPUT_STRING_HEIGHT }
          creditProp = { creditProp }
          onChange = { onChangeValue} 
      />
      <NumberInputBlockContainer
        creditProp = {creditProp}
        onChange = {onChangeValue}
      />
    </div> 
  );
}
 
export default InputRow;