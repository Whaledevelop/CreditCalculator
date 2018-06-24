import React from 'react';

import InputsBlockContainer from '../containers/InputsBlockContainer'
import ReportBlockContainer from '../containers/ReportBlockContainer'

const App = () => {
    return (
        <div id = "calcBody"> 
            <InputsBlockContainer/>
            <ReportBlockContainer/>
        </div>
    )
}
 
export default App;