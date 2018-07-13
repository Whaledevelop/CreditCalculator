import React from 'react';

import '../../css/inputs.css'

import InputRowContainer from '../../containers/InputRowContainer';

const inputsProps = [
  {
    "id": 1, "label": "Сумма кредита", "unit": "руб.",
    "min":20000, "max": 3000000, "step": 10000
  },
  {
    "id": 2, "label": "Срок кредитования", "unit": "мес.",
    "min": 1, "max": 60, "step": 1
  },
  {
    "id": 3, "label": "Процентная ставка", "unit": "% годовых",
    "min": 1, "max": 30, "step": 1
  }
]

const InputsBlock = () => {
  return (  
    <div id = "inputBlock">
      <h3 className = "blockHeader">Кредитный калькулятор</h3>
      {inputsProps.map(inputProps =>  (
        <InputRowContainer
          key = {inputProps.id} 
          inputProps = {inputProps}
        />
      ))}
    </div>
  );
}
 
export default InputsBlock;