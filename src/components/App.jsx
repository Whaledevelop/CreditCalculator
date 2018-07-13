import React from 'react';

import '../css/app.css'

import InputsBlock from './inputs/InputsBlock';
import ReportsBlockContainer from '../containers/ReportsBlockContainer';

const App = () => {
  return (  
    <div id = "calcBody">
      <InputsBlock/>
      <ReportsBlockContainer/>
    </div>
  );
}
 
export default App;