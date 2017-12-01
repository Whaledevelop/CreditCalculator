'use strict';

angular
    .module('inputsBlock', [
        'inputsFromJson'
    ])
    .component('inputsBlock', {
        templateUrl: '/templates/inputs-block.html',
        controller: inputsBlockController
    })

function inputsBlockController(InputsFromJson, $scope, $rootScope) {
    $scope.inputs = InputsFromJson.get();
    $rootScope.inputs = $scope.inputs
    $scope.handleRange = function(id, value) {
        const currentInput = $scope.inputs.find(function(input) {
            return input.id == id
        })
        const inputsValues = $scope.inputs.map(function(input) {
            return parseInt(input.value)
        })
        console.log (inputsValues)
        //console.log($scope.inputs)
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