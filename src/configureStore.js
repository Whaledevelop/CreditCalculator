import { createStore } from 'redux'
import reducer from './reducers'

const initialStore = {
    creditProps : {
        sum : {id: 1, value: 1500000},
        period: {id: 2, value: 12},
        percent: {id: 3, value: 15}
    }
}

export const store = createStore(
    reducer,
    initialStore
)

