const changeValue = (id, value) => {
    return {
        type: 'CHANGE_VALUE',
        payload: {
            id: id,
            value: value
        }
    }
}

export default changeValue