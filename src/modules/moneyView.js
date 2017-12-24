const moneyView = (value) => {
    let valueObj = (Math.round(value) + '').split('');   
    const rest = valueObj.length % 3;
    const partsQuantity = Math.floor(valueObj.length / 3)
    for (let i = 0; i < (partsQuantity); i++) {
        valueObj.splice((rest + i + 3 * i), 0, ' ')
    }         
    return valueObj.join('')
}

export default moneyView