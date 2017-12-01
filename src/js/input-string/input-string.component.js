'use strict';

angular
    .module('inputString', [
        'inputs'
    ])
    .component('inputString', {
        templateUrl: '/templates/input-string.html',
        controller: inputStringController
    })

function inputStringController(Inputs, $scope, $rootScope) {
    $scope.inputs = Inputs.get();
    $rootScope.inputs = $scope.inputs
    $scope.handleRange = function(id, value) {
        const currentInput = $scope.inputs.find(function(input) {
            return input.id == id
        })
        console.log(currentInput)
    }   
    /*
        const regularPaymentSum = ($scope.inputes[0].value/$scope.inputes[1].value) 
        + ($scope.inputes[0].value/100 * $scope.inputes[2].value)/12 ;
        $scope.regularPaymentSum = regularPaymentSum
        const returnSum = regularPaymentSum * $scope.inputes[1].value;
        $scope.returnSum = returnSum
        const overPayment = returnSum - $scope.inputes[0].value;
        $scope.overPayment = overPayment
        $scope.reports = 
    */
}