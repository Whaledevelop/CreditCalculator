import React from 'react';

import InputBlockContainer from '../containers/InputBlockContainer'
import ReportBlockContainer from '../containers/ReportBlockContainer'

const App = () => {
    return (
        <div id = "calcBody"> 
            <InputBlockContainer/>
            <ReportBlockContainer/>
        </div>
    )
}
 
export default App;