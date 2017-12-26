import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

const initialStore = {
    inputs: [
        {
            "id": 1, 
            "label": "Сумма кредита", 
            "min": 20000, 
            "max": 3000000, 
            "step": 10000,
            "value": 1500000,
            "unit": "руб.",
            "container": "creditSum"
        },
        {
            "id": 2, 
            "label": "Срок кредитования", 
            "min": 1, 
            "max": 60, 
            "step": 1,
            "value": 12,
            "unit": "мес.",
            "container": "creditPeriod"
        },
        {
            "id": 3, 
            "label": "Процентная ставка", 
            "min": 1, 
            "max": 30, 
            "step": 1,
            "value": 15,
            "unit": "% годовых",
            "container": "percentageRate"
        }
    ],
    reports: [
        {
            "id": 1, 
            "label": "Вы берете",
            "unit": "руб."
        },
        {
            "id": 2, 
            "label": "Вы возвращаете",
            "unit": "руб."
        },
        {
            "id": 3, 
            "label": "Переплата", 
            "unit": "руб."
        },
        {
            "id": 4, 
            "label": "Срок кредитования",
            "unit": "мес."
        },
        {
            "id": 5, 
            "label": "Процентная ставка",         
            "unit": "% годовых"
        },
        {
            "id": 6, 
            "label": "Сумма ежемесячного платежа", 
            "unit": "руб."
        }
    ]
}

export const store = createStore(
    reducer,
    initialStore,
    applyMiddleware(thunk)
)

