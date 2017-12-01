'use strict';

angular
    .module('reportsBlock', [
        'reportsFromJson'
    ])
    .component('reportsBlock', {
        templateUrl: '/templates/reports-block.html',
        controller: reportsBlockController
    })

function reportsBlockController(ReportsFromJson, $scope, $rootScope) {
    $scope.reports = ReportsFromJson.get(function(reports) {
        console.log (reports[0].value = 3000)
        return reports
    });

}