import { createStore } from 'redux'
import reducer from './reducers'

const initialStore = {
    creditProps : [
        {id: 1, value: 1500000},
        {id: 2, value: 12},
        {id: 3, value: 15}
    ]
}

export const store = createStore(
    reducer,
    initialStore
)

