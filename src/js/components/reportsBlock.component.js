'use strict'

angular
    .module('reportsBlock', [
        'reportsFromJson',
        'valuesStorage'
    ])
    .component('reportsBlock', {
        templateUrl: '/templates/reports-block.html',
        controller: reportsBlockController
    })

function reportsBlockController(ReportsFromJson, valuesStorage, $scope) {
    setInterval(function() {
        ReportsFromJson.get().$promise.then(
            successInGettingReports, errorInGettingReports
        )
    }, 100)

    function successInGettingReports(response, ) {
        const reportsValues = reportsValuesFactory(valuesStorage.getValues());
        const reports = response.map(function(report) {
            report.value = moneyViewFactory(reportsValues[report.id - 1])
            return report
        })  
        $scope.reports = reports
    }
    
    function errorInGettingReports(response, status) {
        console.log ('error ' + status + response)
    }

    function reportsValuesFactory(inputsValues) {
        let creditSum = inputsValues[0]
        if (creditSum < 20000) {
            creditSum = 20000
        } else if (creditSum > 3000000) {
            creditSum = 3000000
        }
        const creditPeriod = inputsValues[1]
        const percentageRate = inputsValues[2]
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

    function moneyViewFactory(value) {
        let valueObj = (Math.round(value) + '').split('');   
        const rest = valueObj.length % 3;
        let partsQuantity = Math.floor(valueObj.length / 3)
        for (let i = 0; i < (partsQuantity); i++) {
            valueObj.splice((rest + i + 3 * i), 0, ' ')
        }         
        return valueObj.join('')
    }   
}