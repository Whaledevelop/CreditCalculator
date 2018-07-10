export const creditPropsValues = (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case 'CHANGE_CREDIT_PROP_VALUE': {
            return Object.assign([], state, {[payload.id - 1]: payload})
        }
        default : return state
    }
}