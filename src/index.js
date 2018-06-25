import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './configureStore'
import './css/app.css'
import CalculatorContainer from './containers/CalculatorContainer';

render(
    <Provider store = {store}>
        <CalculatorContainer />
    </Provider>, 
    document.getElementById('root')
);
