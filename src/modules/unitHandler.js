const unitHandler = (value, unit) => {
    const valueObj = (Math.round(value) + '').split('');   
    const lastNumber = parseInt(valueObj[valueObj.length-1], 10);
    const unitObj = unit.slice(0, 3)
    switch (unitObj) {
        case 'мес' : {
            if (value >= 10 & value <= 20) {
                return 'месяцев'
            } else if (lastNumber === 1) {
                return 'месяц'
            } else if (lastNumber >= 2 & lastNumber <= 4) {
                return 'месяца'
            } else return 'месяцев'
        }
        default: return unit
    }
}

export default unitHandler