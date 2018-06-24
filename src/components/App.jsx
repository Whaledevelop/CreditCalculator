import React from 'react';

import InputsContainer from '../containers/InputsContainer'
import ReportsContainer from '../containers/ReportsContainer'

const App = () => {    
    return (
        <div id = "calcBody"> 
            <InputsContainer />
            <ReportsContainer/>
        </div>
    )
}
 
export default App;