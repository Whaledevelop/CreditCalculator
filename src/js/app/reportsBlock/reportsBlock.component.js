'use strict'

angular.module('reportsBlock')
    .component('reportsBlock', {
        templateUrl: '/templates/reports-block.html',
        controller: reportsBlockController
    })

function reportsBlockController(reportsFromJson, valuesStorage, $scope) {
    setInterval(function() {
        reportsFromJson.get().$promise.then(
            successInGettingReports, errorInGettingReports
        )
    }, 100)

    function successInGettingReports(response) {
        const reportsValues = valuesStorage.getValues();
        const reports = response.map(function(report) {
            report.value = moneyViewFactory(reportsValues[report.id - 1])
            return report
        })  
        $scope.reports = reports
    }
    
    function errorInGettingReports(response) {
        console.log ('error ' + status + response)
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