angular
    .module('core.reportsValues')
    .service('reportsValues', reportValuesService)

function reportValuesService() {
    return {
        getValues: function(inputsValues) {
            const creditSum = inputsValues[0]
            const creditPeriod = inputsValues[1]
            const percentageRate = inputsValues[2]
            const monthlyRate = percentageRate / 12 / 100;
            const regularPaymentSum = (creditSum * monthlyRate) / 
            (1 - (1 / Math.pow((1 + monthlyRate), creditPeriod)))
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