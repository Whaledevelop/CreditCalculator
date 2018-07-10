import React from 'react';

const ErrorMessage = ({ input }) => {
  let message;
  if (input.value < input.min) {
    message = `${input.label} должна быть больше ${input.min}`;
  } if (input.value > input.max) {
    message = `${input.label} должна быть меньше ${input.max}`;
  }
  return (
    <div className = "errorMessage"> 
      {message} 
    </div>
  )
}
 
export default ErrorMessage;