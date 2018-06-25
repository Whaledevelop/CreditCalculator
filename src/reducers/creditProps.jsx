export const creditProps = (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case 'CHANGE_CREDIT_PROP_VALUE': {
            return {...state, [payload.id - 1]: payload}
        }
        default : return state
    }
}