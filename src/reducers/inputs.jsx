export const inputs = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_VALUE': {
            let inputs = state.map(input => {
                if (input.id === action.payload.id) {
                    input.value = action.payload.value
                }
                return input
            })
            return inputs
        }
        default : return state
    }
}