export const creditProps = (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case 'CHANGE_CREDIT_PROP_VALUE': {
            console.log (payload);
            const changedProp = Object.keys(state).find(prop => (
                state[prop].id === payload.id
            ))
            return {...state, [changedProp]: payload}
        }
        default : return state
    }
}