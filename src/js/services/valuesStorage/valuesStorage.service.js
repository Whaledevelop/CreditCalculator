'use strict'

angular.module('valuesStorage')
    .service('valuesStorage', valuesStorageService)

function valuesStorageService(){
    let _values = [];
    return {
        setValues: function(values) {
            _values = values
        },
        getValues: function() {
            let creditSum = _values[0]
            if (creditSum < 20000) {
                creditSum = 20000
            } else if (creditSum > 3000000) {
                creditSum = 3000000
            }
            const creditPeriod = _values[1]
            const percentageRate = _values[2]
            const regularPaymentSum = (creditSum * percentageRate / 12 / 100) / 
            (1 - (1 / Math.pow((1 + percentageRate / 12 / 100), creditPeriod)))
            const returnSum = regularPaymentSum * creditPeriod;
            const overPayment = returnSum - creditSum;
            return [
                creditSum, 
                returnSum, 
                overPayment, 
                creditPeriod, 
                percentageRate, 
                regularPaymentSum
            ]
        }
    }
}