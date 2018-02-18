angular
    .module('core.valueStorage')
    .service('valueStorage', valueStorageService)

function valueStorageService() {
    let inputsValues = []
    return {
        setInputsValues: function(values) {
            inputsValues = values
        },
        getInputsValues: function() {
            return inputsValues
        },
        getReportsValues: function() {
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