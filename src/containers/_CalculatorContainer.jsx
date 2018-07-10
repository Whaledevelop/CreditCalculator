import React from 'react';
import { connect } from 'react-redux'

import InputsContainer from './InputsContainer';
import ReportsContainer from './ReportsContainer';


const calculatorInputsProps = [
    {
        "id": 1, "label": "Сумма кредита", "unit": "руб.",
        "min": 20000, "max": 3000000, "step": 10000
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

const CalculatorContainer = ({ calcInputs }) => (
    <div id = "calcBody"> 
        <InputsContainer inputs = {calcInputs} />
        <ReportsContainer inputs = {calcInputs} />
    </div>
) 

 
const mapStateToProps = state => {
    const calcInputs = calculatorInputsProps.map((prop, i) => {
        return Object.assign(prop, state.creditProps[i])
    })
    return {
        calcInputs: calcInputs
    }
}

export default connect(
    mapStateToProps
)(CalculatorContainer);