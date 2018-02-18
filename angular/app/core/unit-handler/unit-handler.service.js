angular
    .module('core.unitHandler', [])
    .service('unitHandler', unitHandlerService)

function unitHandlerService() {
    return {
        setUnit: function(value, unit) {
            switch (unit) {
                case 'мес.': 
                    if (value == 1) {
                        return 'месяц'
                    } else if (value > 1 && value < 5) {
                        return 'месяца'
                    } else return 'месяцев'
                default: return unit
            }
        }
    }
}