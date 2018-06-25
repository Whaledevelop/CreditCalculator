const unitHandler = (value, unit) => {
    if (isNaN(value)) { 
        return ""
    }
    const valueObj = (Math.round(value) + '').split('');
    const lastNumber = +valueObj[valueObj.length-1];
    const unitObj = unit.slice(0, 3)
    switch (unitObj) {
        case 'мес' : {
            if (lastNumber === 1) {
                return 'месяц'
            } else if (lastNumber >= 2 & lastNumber <= 4) {
                return 'месяца'
            } else return 'месяцев'
        }
        case 'руб' : {
            if (lastNumber === 1) {
                return 'рубль'
            } else if (lastNumber >= 2 & lastNumber <= 4) {
                return 'рубля'
            } else return 'рублей'
        }
        default: return unit
    }
}

export default unitHandler