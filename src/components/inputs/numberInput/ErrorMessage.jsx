import React from 'react';

const ErrorMessage = ({ valueStatus }) => {
  const status = valueStatus === "correct" ? "" : valueStatus
  return (
    <div className = "errorMessage"> 
      {status}
    </div>
  )
}
 
export default ErrorMessage;