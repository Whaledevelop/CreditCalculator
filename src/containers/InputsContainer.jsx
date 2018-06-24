import React from 'react';
import { connect } from 'react-redux'

import changeValue from '../actions/creditProps'

import Inputs from '../components/inputs/Inputs'

const inputsProps = [
    {
        "id": 1, "label": "Сумма кредита", 
        "min": 20000, "max": 3000000, "step": 10000,
        "unit": "руб.", "container": "creditSum"
    },
    {
        "id": 2, "label": "Срок кредитования", 
        "min": 1, "max": 60, "step": 1,
        "unit": "мес.", "container": "creditPeriod"
    },
    {
        "id": 3, "label": "Процентная ставка", 
        "min": 1, "max": 30, "step": 1,
        "unit": "% годовых", "container": "percentageRate"
    }
]

const InputsContainer = ({ creditProps, onHandleValue }) => {
    const inputs = inputsProps.map(input => {
        let inputKey = Object.keys(creditProps).find(prop => (
            creditProps[prop].id === input.id
        ))
        input.value = creditProps[inputKey].value
        return input
    })
    return (
        <Inputs 
            inputs = {inputs}
            onHandleValue = {onHandleValue}
        />
    ) 
}

 
const mapStateToProps = (state) => {
    return {
        creditProps: state.creditProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleValue: (id, value) => {
            dispatch(changeValue(id, value))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputsContainer);