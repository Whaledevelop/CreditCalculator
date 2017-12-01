'use strict';

angular
    .module('reportBlock', [
        'reports'
    ])
    .component('reportBlock', {
        templateUrl: '/templates/report-block.html',
        controller: reportBlockController
    })

function reportBlockController(Reports, $scope, $rootScope) {
    $scope.inputs = $rootScope.inputs;
    $scope.reports = Reports.get(function(report) {
        console.log (report[0].value = 3000)
        return report
    });
    
    /*$rootScope.inputs.then(success, error);
    function success(responce) {
        console.log (responce)
    }
    function error (responce) {
        console.log (responce)
    }*/
}