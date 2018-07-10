const changeValue = (id, value) => {
    return {
        type: 'CHANGE_CREDIT_PROP_VALUE',
        payload: {
            id: id,
            value: value
        }
    }
}

export default changeValue